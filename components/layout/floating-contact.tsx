"use client"

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      {/* Zalo Button */}
      <a
        href="https://zalo.me/0938386679"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn bg-[#0068FF] hover:bg-[#0052CC]"
        title="Chat Zalo"
      >
        <svg className="w-7 h-7" viewBox="0 0 48 48" fill="currentColor">
          <path d="M24 4C13.04 4 4 12.08 4 22.5c0 5.08 2.3 9.64 6 12.74v8.76l8.22-4.52c1.84.5 3.78.76 5.78.76 10.96 0 20-8.08 20-18.5S34.96 4 24 4zm10.5 24.9h-6.3v-6.3h-1.8v6.3h-6.3v1.8h6.3v6.3h1.8v-6.3h6.3v-1.8z" />
        </svg>
      </a>

      {/* Phone Button */}
      <a href="tel:0938386679" className="contact-btn bg-[#25D366] hover:bg-[#1ebe57]" title="Gọi điện">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </a>
    </div>
  )
}
