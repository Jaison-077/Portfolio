'use client'

import React from 'react'

type ResumeViewerProps = {
  open: boolean
  onClose: () => void
  src?: string
}

export default function ResumeViewer({
  open,
  onClose,
  src = '/resume.pdf',
}: ResumeViewerProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      {/* Clickable background to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-[95vw] h-[90vh] max-w-5xl bg-[#111319] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/60">
          <h3 className="text-sm md:text-base font-semibold text-white">
            Resume – PDF Viewer
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xs md:text-sm bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
          >
            Close ✕
          </button>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 bg-black">
          <iframe
            src={src}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>

        {/* Optional: download link/footer */}
        <div className="px-4 py-2 border-t border-white/10 bg-black/60 flex items-center justify-between text-xs text-gray-400">
          <span>Viewing /resume.pdf</span>
          <a
            href={src}
            download
            className="text-primary hover:text-secondary underline"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}