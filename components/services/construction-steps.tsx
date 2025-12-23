"use client"

import { useState } from "react"

const CONSTRUCTION_STEPS = [
  {
    id: 1,
    title: "Khảo Sát",
    description: "Trao đổi yêu cầu, đo đạc không gian và hiểu rõ nhu cầu của khách hàng",
    details: [
      "Khảo sát không gian thi công",
      "Trao đổi ý tưởng và yêu cầu của khách hàng",
      "Đo đạc kích thước chính xác",
      "Phân tích điều kiện ánh sáng và thời tiết"
    ]
  },
  {
    id: 2,
    title: "Thiết Kế & Tư Vấn",
    description: "Thiết kế bố cục hòn non bộ và tạo bản vẽ chi tiết",
    details: [
      "Thiết kế bản vẽ 2D/3D chi tiết",
      "Tư vấn phong thủy hợp mệnh khách hàng",
      "Lựa chọn vật liệu và cây cỏ phù hợp",
      "Trình bày phương án và báo giá chi tiết"
    ]
  },
  {
    id: 3,
    title: "Thi Công Hoàn Thành",
    description: "Thực hiện thi công từng bước theo thiết kế, đảm bảo chất lượng cao nhất",
    details: [
      "Chuẩn bị vật liệu và thiết bị cần thiết",
      "Xếp đá, lấp đất, trồng cây theo thiết kế",
      "Lắp đặt hệ thống nước (nếu có thác)",
      "Trang trí hoàn thiện và bảo trì hàng tháng"
    ]
  }
]

export default function ConstructionSteps() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Quy Trình Thi Công Hòn Non Bộ
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            3 bước thi công chuyên nghiệp từ khảo sát đến hoàn thành, 
            đảm bảo chất lượng và thẩm mỹ cao nhất
          </p>
        </div>

        {/* Steps Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {CONSTRUCTION_STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
              className={`group relative h-32 sm:h-36 lg:h-40 rounded-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden ${
                selectedStep === step.id
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-2xl scale-105 sm:scale-100"
                  : "bg-white text-gray-900 border-2 border-gray-200 hover:border-green-500 hover:shadow-lg"
              }`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative h-full flex flex-col items-center justify-center p-4 sm:p-6">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-3 sm:mb-4 transition-all duration-300 ${
                  selectedStep === step.id
                    ? "bg-white text-green-600 shadow-lg scale-110"
                    : "bg-green-100 text-green-600 group-hover:bg-green-200 group-hover:scale-110"
                }`}>
                  {step.id}
                </div>
                <h3 className="font-bold text-base sm:text-lg lg:text-xl text-center leading-tight">
                  {step.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Description - Responsive */}
        {selectedStep !== null && (
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 lg:p-10 border-l-4 border-green-500 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Bước {selectedStep}: {CONSTRUCTION_STEPS[selectedStep - 1].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {CONSTRUCTION_STEPS[selectedStep - 1].description}
                </p>
              </div>
              <button
                onClick={() => setSelectedStep(null)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 text-2xl hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-lg transition"
              >
                ✕
              </button>
            </div>

            {/* Details List - Responsive */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 sm:p-6 lg:p-8">
              <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 text-lg sm:text-xl">
                📋 Chi tiết công việc:
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {CONSTRUCTION_STEPS[selectedStep - 1].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 sm:gap-4">
                    <span className="inline-flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Buttons - Responsive */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              {selectedStep > 1 && (
                <button
                  onClick={() => setSelectedStep(selectedStep - 1)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  ← Bước trước
                </button>
              )}
              {selectedStep < CONSTRUCTION_STEPS.length && (
                <button
                  onClick={() => setSelectedStep(selectedStep + 1)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition transform hover:scale-105 ml-auto"
                >
                  Bước tiếp →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Timeline View - Desktop Only */}
        <div className="mt-16 sm:mt-20 relative hidden lg:block">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 lg:mb-16 text-center">
            ⏱️ Dòng Thời Gian Thi Công
          </h3>
          <div className="space-y-8 lg:space-y-12">
            {CONSTRUCTION_STEPS.map((step, index) => (
              <div key={step.id} className="flex gap-6 lg:gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center font-bold text-lg lg:text-xl shadow-lg">
                    {step.id}
                  </div>
                  {index < CONSTRUCTION_STEPS.length - 1 && (
                    <div className="w-1 h-24 lg:h-32 bg-gradient-to-b from-green-500 to-gray-200 mt-2"></div>
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h4 className="font-bold text-lg lg:text-xl text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-base lg:text-lg mb-3 sm:mb-4">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        :global(.animate-fadeIn) {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
