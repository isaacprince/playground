"use client";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import BackButton from "@/components/back-button";

export default function Page() {
  return (
    <div className="bg-[#111111]">
      <Nav />
      {/* Playground */}
      <section className="flex flex-col items-center bg-[#111111] pt-[3rem] md:pt-[6.875rem] px-4 sm:px-8">
        <div className="w-full max-w-6xl">
          <BackButton href="/" label="Back to home" className="mb-8" />
        </div>
        <div className="flex justify-center w-full">
          <h1 className="text-[#FF6600] text-[1.75rem] sm:text-[2.5rem] font-black mb-[2.4375rem] font-neueMachina">
            Playground
          </h1>
        </div>

        {/* Film Strip Container */}
        <div className="relative w-full">
          {/* Top Film Strip */}
          <div className="w-full h-[2rem]  flex items-center justify-between px-4 mb-2">
            <span className="text-white text-xs">
              1600 NEGATIVE REVERSAL A4
            </span>
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 1</span>
              <span className="text-white text-xs">→ 2A</span>
              <span className="text-white text-xs">→ 3A</span>
            </div>
            <span className="text-[#918D8D] text-xs">DUAL STND FILM</span>
          </div>
          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>

          {/* Images Container */}
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scroll">
              {/* First set of images */}
              <div className="flex gap-4 shrink-0">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner1.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 shrink-0 ml-4">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner1.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fullg gap-[110px] flex items-center justify-center px-4 mb-2">
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
          </div>

          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>
          <div className="w-full  flex items-center justify-center px-4 mb-2">
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 4</span>
              <span className="text-white text-xs">→ 4A</span>
              <span className="text-white text-xs">→ 5A</span>
            </div>
          </div>
        </div>
        {/* Film Strip Container 2*/}
        <div className="relative w-full mt-16">
          {/* Top Film Strip */}
          <div className="w-full h-[2rem]  flex items-center justify-between px-4 mb-2">
            <span className="text-white text-xs">
              1600 NEGATIVE REVERSAL A4
            </span>
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 1</span>
              <span className="text-white text-xs">→ 2A</span>
              <span className="text-white text-xs">→ 3A</span>
            </div>
            <span className="text-[#918D8D] text-xs">DUAL STND FILM</span>
          </div>
          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>

          {/* Images Container */}
          <div className="relative overflow-hidden w-full">
            <div className="flex animate-scrolltwo">
              {/* First set of images */}
              <div className="flex gap-4 shrink-0">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner5.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner2.png"
                    alt="Banner 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-4 shrink-0 ml-4">
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner5.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner6.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner3.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[36.5rem] h-[26.25rem] relative p-4">
                  <img
                    src="/banner4.png"
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-fullg gap-[110px] flex items-center justify-center px-4 mb-2">
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
            <span className="text-white text-xs">GRADE BALANCED FILM 6710</span>
          </div>

          <div className="w-full h-[2rem] flex items-center justify-start gap-6  mb-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-[3.5625rem] h-[2rem] bg-[#918D8D]" />
            ))}
          </div>
          <div className="w-full  flex items-center justify-center px-4 mb-2">
            <div className="flex gap-8">
              <span className="text-white text-xs">→ 4</span>
              <span className="text-white text-xs">→ 4A</span>
              <span className="text-white text-xs">→ 5A</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
