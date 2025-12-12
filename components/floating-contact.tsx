"use client"

export default function FloatingContact() {
  const handleZaloClick = () => {
    window.open("https://zalo.me/0907997759", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+84907997759"
  }

  return (
    <div className="floating-contact">
      {/* Zalo Button */}
      <button
        onClick={handleZaloClick}
        className="contact-btn bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl"
        aria-label="Chat Zalo"
        title="Chat Zalo ngay"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </button>

      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="contact-btn bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl"
        aria-label="Gọi điện"
        title="Gọi: 0907 997 759"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
        </svg>
      </button>
    </div>
  )
}
