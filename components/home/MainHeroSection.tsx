import React from 'react';

const badges = ["맞춤 감량", "맞춤 처방", "요요 관리"];

export function MainHeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[840px] w-full bg-[#F9F7EF] overflow-hidden">
      {/* Decorative: top-right small shape */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/01140a919a0443781cbc93eebb978de9c4cda83c?width=470"
        alt=""
        className="pointer-events-none absolute top-[10%] right-0 w-[12vw] max-w-[235px] z-10"
      />

      {/* Decorative: bottom-left wave */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b3a6259766a1fc9d56a967c2b2fc4ca2b21c1439?width=1364"
        alt=""
        className="pointer-events-none absolute bottom-0 left-0 w-[36vw] max-w-[682px]"
      />

      {/* Decorative: bottom-center wave */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/457d3425df60cd5b648b1faeb14126d81abac97f?width=1294"
        alt=""
        className="pointer-events-none absolute bottom-0 left-[25%] w-[34vw] max-w-[647px]"
      />

      {/* Page layout */}
      <div className="relative min-h-[600px] lg:min-h-[840px] flex flex-col-reverse lg:flex-row">
        {/* ── Left column: woman image ── */}
        <div className="relative h-72 sm:h-96 lg:h-auto lg:w-[55%] shrink-0">
          {/* Mobile: fill the box */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7d26236f1daa0936a781262e18dd4fe3695cb9c?width=1676"
            alt="다이어트 맞춤 감량 전문가"
            className="
              lg:hidden
              w-full h-full object-cover object-top
            "
          />

          {/* Desktop: overflow upward into header white strip */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c7d26236f1daa0936a781262e18dd4fe3695cb9c?width=1676"
            alt="다이어트 맞춤 감량 전문가"
            className="
              hidden lg:block
              absolute bottom-0 left-[7%]
              h-[115%] w-auto object-bottom object-contain
              z-10
            "
          />
        </div>

        {/* ── Right column: text content ── */}
        <div
          className="
            relative z-30
            flex-1
            flex flex-col justify-center
            px-8 sm:px-12 lg:pl-12 lg:pr-20
            py-12
            lg:pt-0 lg:pb-0
          "
        >
          {/* Small subtitle */}
          <p
            className="
              font-['Paperlogy'] font-medium text-black
              text-xl sm:text-2xl lg:text-4xl xl:text-[50px]
              leading-tight tracking-[-0.05em]
              mb-1 lg:mb-2
            "
          >
            체중만 줄이는 다이어트가 아닌
          </p>

          {/* Main headline */}
          <h1
            className="
              font-['Paperlogy']
              text-3xl sm:text-4xl lg:text-6xl xl:text-[80px]
              leading-tight tracking-[-0.05em]
              mb-6 lg:mb-10
            "
          >
            <span className="font-normal text-black break-keep">몸 상태를 살피는 </span>
            <span className="font-extrabold text-[var(--color-primary)] whitespace-nowrap">맞춤 감량</span>
          </h1>

          {/* Description */}
          <p
            className="
              font-sans font-normal text-gray-800
              text-base sm:text-lg lg:text-2xl xl:text-[32px]
              leading-relaxed xl:leading-[1.6]
              tracking-[-0.05em]
              mb-8 lg:mb-12
              max-w-2xl
              break-keep
            "
          >
            개인마다 다른 체질과 대사 상태, 생활습관까지 세밀하게 살펴 현재 몸 상태에 맞는 감량 방향과 꾸준한 관리 방법을 제안합니다.
          </p>

          {/* Pill badges */}
          <div className="flex flex-wrap gap-3 lg:gap-4">
            {badges.map((tag) => (
              <span
                key={tag}
                className="
                  bg-[var(--color-primary)] text-white
                  font-sans font-medium
                  text-base sm:text-lg lg:text-2xl xl:text-[30px]
                  px-5 sm:px-6 lg:px-8 py-1.5 sm:py-2
                  rounded-full
                  leading-tight tracking-[-0.05em]
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
