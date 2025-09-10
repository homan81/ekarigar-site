"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function ImageSlider() {
  return (
    <div className="-mt-10">
      {/* First Swiper */}
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 }, // Mobile
          640: { slidesPerView: 1.5, spaceBetween: 10 }, // Small tablets
          768: { slidesPerView: 2.5, spaceBetween: 250 }, // Tablets
          1024: { slidesPerView: 3.5, spaceBetween: 380 }, // Laptops
          1280: { slidesPerView: 4, spaceBetween: 350 }, // Desktops
          1500: { slidesPerView: 4.5, spaceBetween: 230 }, // Desktops
        }}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        allowTouchMove={true}
        grabCursor={false}
        className="rounded-lg"
      >
        {/* Slides */}

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Friendships, connection & likeminded people make the added bonus
              of increased business & income worthwhile.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Matthew S,</p>
                <p className="text-xs sm:text-sm">Real Estate, Australia</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Today we own a Pvt. Ltd. Firm that has achieved Rs 1.5 Cr in
              business within 9 months, with 95% of it coming from BNI.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Bhavesh-Vora-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Bhavesh Vora,</p>
                <p className="text-xs sm:text-sm">
                  Engineering Solutions, India
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              BNI has been a game changer for my business.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Jennie-Bellinger-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Manuel Gutierrez,</p>
                <p className="text-xs sm:text-sm">Goper Coma S.L, Spain</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              BNI has shown me how to raise the bar and rewrite my business
              blueprint.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Farzana Suri,</p>
                <p className="text-xs sm:text-sm">Coaching, India</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Over 86% of my clients come through referrals from BNI Members.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Jennie B,</p>
                <p className="text-xs sm:text-sm">Sales, United States</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Second Swiper (reverse direction) */}
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 }, // Mobile
          640: { slidesPerView: 1.5, spaceBetween: 10 }, // Small tablets
          768: { slidesPerView: 2.5, spaceBetween: 250 }, // Tablets
          1024: { slidesPerView: 3.5, spaceBetween: 380 }, // Laptops
          1280: { slidesPerView: 4, spaceBetween: 250 }, // Desktops
          1500: { slidesPerView: 4.5, spaceBetween: 230 }, // Desktops
        }}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        allowTouchMove={true}
        grabCursor={false}
        className="rounded-lg mt-10"
      >
        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Friendships, connection & likeminded people make the added bonus
              of increased business & income worthwhile.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Matthew S,</p>
                <p className="text-xs sm:text-sm">Real Estate, Australia</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Friendships, connection & likeminded people make the added bonus
              of increased business & income worthwhile.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Matthew S,</p>
                <p className="text-xs sm:text-sm">Real Estate, Australia</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Today we own a Pvt. Ltd. Firm that has achieved Rs 1.5 Cr in
              business within 9 months, with 95% of it coming from BNI.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Bhavesh-Vora-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Bhavesh Vora,</p>
                <p className="text-xs sm:text-sm">
                  Engineering Solutions, India
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              BNI has been a game changer for my business.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Jennie-Bellinger-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Manuel Gutierrez,</p>
                <p className="text-xs sm:text-sm">Goper Coma S.L, Spain</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              BNI has shown me how to raise the bar and rewrite my business
              blueprint.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Farzana Suri,</p>
                <p className="text-xs sm:text-sm">Coaching, India</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-card rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
            <p className="text-white text-xl sm:text-2xl font-medium mb-5">
              Over 86% of my clients come through referrals from BNI Members.
            </p>
            <div className="United flex items-center">
              <img
                src="/images/Matthew-Stevens-80x80-1.png"
                className="rounded-lg"
                alt="Slide 1"
              />
              <div className="ml-9 text-white font-bold">
                <p className="text-sm sm:text-base">Jennie B,</p>
                <p className="text-xs sm:text-sm">Sales, United States</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
