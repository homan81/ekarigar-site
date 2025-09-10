import Image from "next/image";
import "@/styles/page.css";
import ImageSlider from "@/_component/ImageSlider";
import ScrollSlider from "@/_component/ScrollSlider";
import Stepform from "@/_component/Stepform";

export default function Home() {
  return (
    <div>
      <div className="main-img mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <main>
          <div className="video-button">
            <div>
              <video
                src="images/BNI-Hero-Banner-New.mp4"
                autoPlay
                loop
                muted
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            {/* <div className="GetInvit">
              <button>Get Invited </button>
            </div> */}
          </div>
        </main>

        <div className="mb-10 px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <div>
              <h2 className="font-bold leading-normal text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                Join <span className="text-[#CF2030]">BNI®</span>, the world’s
                largest and most successful{" "}
                <span className="text-[#CF2030]">
                  referral networking organization
                </span>
              </h2>
            </div>
            <div>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Discover how BNI Members around the world meet each week locally
                to pass millions of referrals to each other worth billions of
                dollars in revenue for businesses just like yours.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-10">
            <div className="flex items-center">
              <Image
                src="/images/what-is-bni-yt.jpg"
                alt="BNI Thumbnail"
                className="rounded-3xl"
                width={588}
                height={136}
              />
            </div>

            <div className="rounded-3xl overflow-hidden relative main-box">
              <div className="grid grid-cols-2">
                <div className="h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] bg-white flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-[#CF2030] text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                      340K+
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-normal">
                      Global Members
                    </p>
                  </div>
                </div>

                <div className="h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] flex flex-col justify-center Last">
                  <div className="text-center">
                    <h3 className="text-[#CF2030] text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                      340K+
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-normal">
                      Global Members
                    </p>
                  </div>
                </div>

                <div className="h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] flex flex-col justify-center Last">
                  <div className="text-center">
                    <h3 className="text-[#CF2030] text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                      340K+
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-normal">
                      Global Members
                    </p>
                  </div>
                </div>

                <div className="h-[180px] sm:h-[200px] md:h-[230px] lg:h-[260px] bg-white flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-[#CF2030] text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                      340K+
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl font-normal">
                      Global Members
                    </p>
                    <p className="text-base sm:text-lg md:text-xl font-normal">
                      Last 12 Months*
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-white text-center h-40 flex flex-col justify-center absolute 
              rounded-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg center-card"
              >
                <h3 className="Revenue text-[#CF2030] text-2xl sm:text-3xl md:text-4xl font-bold leading-none">
                  340K+
                </h3>
                <p className="Members text-black text-base sm:text-lg md:text-xl font-normal leading-none text-center">
                  Global Members
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 mt-12 sm:py-8 sm:px-6 lg:px-10 rounded-2xl entremain">
            <div className="col-span-1 lg:col-span-8 text-center lg:text-left">
              <h2 className="max-w-[700px] text-xl sm:text-2xl md:text-3xl lg:text-4xl business ">
                <span className="text-[#CF2030]"> See why 340K+ </span>{" "}
                entrepreneurs like you chose BNI to grow their business
              </h2>
            </div>
            <div className="col-span-1 lg:col-span-4 flex justify-center items-center mt-6 lg:mt-0 Chapter">
              <button className="uppercase rounded-full px-6 py-3 bg-[#CF2030] text-white text-sm sm:text-base md:text-lg cursor-pointer">
                Find a Chapter
              </button>
            </div>
          </div>
        </div>
      </div>

      <ScrollSlider />

      <div className="bnibgred">
        <div className="mx-auto max-w-7xl w-full pt-20">
          <div className="hbhb">
            <div className="text-center">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold not-italic">
                3 Steps to Success
              </h2>

              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal not-italic m-0 mt-2">
                Get invited to a BNI networking meeting and witness the power of
                referrals in action.
              </p>
            </div>

            <div className="grid grid-cols-12 mt-5">
              <div className="col-span-4 text-center flex flex-col items-center">
                <p className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-bold text-[#cf2030]">
                  1
                </p>

                <h2 className="text-[#f2f2f2] text-lg sm:text-xl md:text-2xl font-bold leading-normal my-4">
                  Visit a BNI chapter
                </h2>

                <p className="text-[#f2f2f2] text-center text-sm sm:text-base md:text-lg font-medium leading-normal max-w-[275px] mx-auto">
                  and experience the power of the BNI network
                </p>
              </div>

              <div className="col-span-4 text-center flex flex-col items-center">
                <p className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-bold text-[#cf2030]">
                  2
                </p>

                <h2 className="text-[#f2f2f2] text-lg sm:text-xl md:text-2xl font-bold leading-normal my-4">
                  Meet the Members
                </h2>

                <p className="text-[#f2f2f2] text-center text-sm sm:text-base md:text-lg font-medium leading-normal max-w-[275px] mx-auto">
                  and learn how they can help you grow your business
                </p>
              </div>

              <div className="col-span-4 text-center flex flex-col items-center">
                <p className="bg-white rounded-full w-16 h-16 flex items-center justify-center text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] font-bold text-[#cf2030]">
                  3
                </p>

                <h2 className="text-[#f2f2f2] text-lg sm:text-xl md:text-2xl font-bold leading-normal my-4">
                  Apply
                </h2>

                <p className="text-[#f2f2f2] text-center text-sm sm:text-base md:text-lg font-medium leading-normal max-w-[275px] mx-auto">
                  to become a Member of a BNI Chapter
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                className="uppercase text-[#cf2030] cursor-pointer bg-white rounded-[25px] 
                     px-6 py-2 text-sm font-bold
                     sm:px-10 sm:py-2.5 sm:text-base
                     md:text-lg lg:text-xl"
              >
                Get Invited
              </button>
            </div>
          </div>
        </div>
        <ImageSlider />
        <div className="mx-auto max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl py-20">
          <p className="herein">
            *Disclaimer:   This information is based on historical BNI Member
            self-reported data as of August 5, 2024, and represents collective
            results from BNI Members worldwide over the last 12 months. Errors
            in self-reporting of data or in subsequent analysis are possible.
            Therefore, the information herein should only be viewed as
            representative in nature.
          </p>
        </div>
      </div>
    </div>
  );
}
