import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { forwardRef } from "react";

const Arrow = forwardRef<HTMLButtonElement, { direction: "left" | "right"; onClick?: () => void }>(
  ({ direction, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white shadow-sm hover:bg-gray-100 transition-colors duration-150"
      aria-label={direction === "left" ? "Previous" : "Next"}
      type="button"
    >
      <svg
        width={16}
        height={16}
        fill="none"
        stroke="#888"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  )
);

const PartnerSection = ({ className }: { className?: string }) => {
  const partners = [
    { logo: <img src="meta-partner.svg" alt="Google Cloud Partner" /> },
    { logo: <img src="google-cloud.svg" alt="Meta Business Partners" /> },
    { logo: <img src="google-partner.svg" alt="Google Premier Partner" /> },
    { logo: <img src="shopify.svg" alt="Shopify Partner" /> },
    { logo: <img src="tiktok.svg" alt="TikTok Marketing Partner" /> },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  // Update Swiper navigation after refs are set
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={cn("py-12 bg-gray-50", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <h3 className="text-xl font-syne font-bold mb-2">A PARTNER NOT A VENDOR</h3>
          <div className="h-1 w-20 bg-chaotic-blue"></div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={16}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="mb-2">{partner.logo}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Arrows below carousel */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Arrow direction="left" ref={prevRef} />
            <Arrow direction="right" ref={nextRef} />
          </div>
        </div>

        {/* Desktop view: original grid, hidden on mobile */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-2">{partner.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
