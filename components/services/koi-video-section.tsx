"use client"

export default function KoiVideoSection() {
  return (
    <section className="relative py-0 bg-black">
      <div className="w-full">
        <video
          width={1920}
          height={1080}
          className="w-full h-auto block"
          autoPlay
          muted
          loop
        >
          <source src="/video/7.mp4" type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video HTML5.
        </video>
      </div>
    </section>
  )
}
