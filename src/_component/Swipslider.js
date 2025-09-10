"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TermsSwiper() {
  const terms = [
    {
      id: "paint_clean_charge",
      title: "Painting & Cleaning Charges",
      desc: "On conclusion of the agreement and vacating the premises, the licensee has agreed to a deduction of 1 month licensee fees from the deposit towards painting and cleaning charges.",
    },
    {
      id: "prop_condition",
      title: "Property Condition Upon Vacating",
      desc: "Upon vacating the premises, the Tenant is required to return the property in a clean condition, similar to the condition at move-in. If additional cleaning or repainting is required, costs will be deducted.",
    },
    {
      id: "elec_water_charge",
      title: "Electricity & Water Charges",
      desc: "The Tenant shall be responsible for the payment of all electricity and water bills associated with the premises during the tenancy.",
    },
    {
      id: "furniture_1",
      title: "Furniture",
      desc: "The Tenant shall not make any alterations to the furniture, including but not limited to painting, reupholstering, or disassembling, without the Landlord&apos;s written consent.",
    },
    {
      id: "furniture_damage",
      title: "Furniture & Damages",
      desc: "In the event of damage caused by the Tenant, the Tenant shall be liable for the cost of repair or replacement of the damaged furniture or furnishings.",
    },
    {
      id: "refund_depo",
      title: "Refundable Deposit",
      desc: "The Landlord may deduct reasonable cleaning and painting costs from the Tenant&apos;s security deposit if the premises are not returned in a satisfactory condition.",
    },
    {
      id: "security_1",
      title: "Security",
      desc: "This Agreement can be cancelled immediately by the licensor if the Licensee is found guilty of conducting any illegal activity on the premises.",
    },
    {
      id: "pet_1",
      title: "Pets",
      desc: "The Tenant agrees that no additional pets will be kept on the premises without the Landlord’s prior written consent.",
    },
    {
      id: "pet_2",
      title: "Pets",
      desc: "The Tenant shall be liable for any damage caused by the pet to the premises, including chewing, scratching, or soiling.",
    },
    {
      id: "gst_regist",
      title: "Prohibition on GST Registration",
      desc: "The Tenant shall not use the Premises to obtain or register for GST, nor represent it as their principal place of business for GST purposes.",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // 2 per view on tablets
          1024: { slidesPerView: 1.5 }, // 3 per view on desktop
        }}
      >
        {terms.map((item) => (
          <SwiperSlide key={item.id}>
            <li>
              <input
                type="checkbox"
                id={item.id}
                name="other_tc"
                className="hidden peer"
              />
              <label
                htmlFor={item.id}
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer
                  dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 
                  dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 
                  peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">{item.title}</div>
                  <div className="w-full text-sm">{item.desc}</div>
                </div>
              </label>
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
