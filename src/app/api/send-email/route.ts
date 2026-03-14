import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate environment variable first
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json(
        { message: 'Email service not configured. Please set RESEND_API_KEY environment variable.' },
        { status: 500 }
      )
    }

    // Initialize Resend with the API key
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to your inbox
    const adminEmailResult = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'jaisonksebastian1999@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p><small>Reply to this email to respond to ${name}</small></p>
      `,
    })

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error)
      throw new Error(`Failed to send email: ${JSON.stringify(adminEmailResult.error)}`)
    }

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: 'Jaison Sebastian <onboarding@resend.dev>',
      to: email,
      subject: 'Thank You for Contacting Me',
      html: `
        <h2>Thank you ${name}!</h2>
        <p>I've received your message and will get back to you soon.</p>
        <p>Best regards,<br><strong>Jaison Sebastian</strong></p>
        <p><small>You sent: "${subject}"</small></p>
      `,
    })

    if (userEmailResult.error) {
      console.error('Error sending confirmation email:', userEmailResult.error)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json(
      { message: 'Email sent successfully', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { message: 'Failed to send email', error: errorMessage, success: false },
      { status: 500 }
    )
  }
}
