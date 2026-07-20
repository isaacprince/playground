/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project4Ref = useRef(null);
  const isProject1InView = useInView(project1Ref, {
    once: true,
    margin: "-100px",
  });
  const isProject2InView = useInView(project2Ref, {
    once: true,
    margin: "-100px",
  });
  const isProject4InView = useInView(project4Ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <div className="min-h-screen h-full bg-[#111111]">
      {/* hero */}
      <main className="min-h-fit lg:min-h-screen h-full bg-[#111111] relative">
        <Nav />

        <AnimatePresence mode="wait">
          <div className="relative pt-0 mt-10 bg-[#111111] h-full">
            {/* Mobile hero — WANTED polaroid with board atmosphere */}
            <div
              className="lg:hidden relative flex flex-col items-center justify-center gap-8 px-4 pb-10 overflow-hidden min-h-[calc(100dvh-7.5rem)]"
              id="about"
            >
              {/* Atmosphere — warm glow + vignette so the board isn't flat black */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div
                  className="absolute left-1/2 top-[42%] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,102,0,0.22) 0%, rgba(255,102,0,0.06) 42%, transparent 70%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
                  }}
                />
              </div>

              {/* Red string threads — scrapbook / investigation board */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <motion.line
                  x1="8"
                  y1="18"
                  x2="48"
                  y2="42"
                  stroke="#C41E1E"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.9, delay: 0.35 }}
                />
                <motion.line
                  x1="92"
                  y1="16"
                  x2="55"
                  y2="40"
                  stroke="#C41E1E"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.85 }}
                  transition={{ duration: 0.9, delay: 0.45 }}
                />
                <motion.line
                  x1="6"
                  y1="78"
                  x2="42"
                  y2="58"
                  stroke="#C41E1E"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 0.9, delay: 0.55 }}
                />
                <motion.line
                  x1="94"
                  y1="82"
                  x2="58"
                  y2="60"
                  stroke="#C41E1E"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 0.9, delay: 0.65 }}
                />
              </svg>

              {/* Pushpin dots at string ends */}
              {[
                { className: "left-[6%] top-[16%]", delay: 0.5 },
                { className: "right-[6%] top-[14%]", delay: 0.6 },
                { className: "left-[4%] bottom-[20%]", delay: 0.7 },
                { className: "right-[4%] bottom-[16%]", delay: 0.8 },
              ].map((pin) => (
                <motion.span
                  key={pin.className}
                  aria-hidden
                  className={`absolute z-10 h-2.5 w-2.5 rounded-full bg-[#C41E1E] ${pin.className}`}
                  style={{ boxShadow: "0 0 10px rgba(196,30,30,0.7)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 16,
                    delay: pin.delay,
                  }}
                />
              ))}

              <motion.div
                className="relative z-20 w-full"
                initial={{ opacity: 0, scale: 0.86, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 110, damping: 14 }}
              >
                <motion.img
                  src="/prince.png"
                  alt="Prince Isaac"
                  className="mx-auto w-[88%] max-w-[26rem] sm:max-w-[32rem]"
                  style={{ filter: "drop-shadow(0 18px 40px rgba(0,0,0,0.55))" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              <motion.div
                className="relative z-20 max-w-[16rem] text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <p className="font-neueMachina text-[0.85rem] leading-snug text-[#FF6600]">
                  Product designer - London
                </p>
              </motion.div>

              <motion.div
                className="relative z-20"
                style={{ width: "3rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.9 },
                  y: {
                    duration: 1.4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <img src="/scroll.png" alt="" className="w-full" />
              </motion.div>
            </div>

            {/* Desktop hero — collage layout */}
            <div className="hidden lg:block relative w-full h-full pb-[4rem] md:pb-[6rem]">
              {/* About Section */}
              <motion.div
                id="about"
                className="absolute top-[13.1875rem] left-[1rem] md:left-[12.3125rem] w-[18.5625rem] z-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src="/about.png" alt="" className="w-full" />
                <p className="absolute top-[18%] left-[10%] right-[10%] text-[#333435] font-neueMachinaBold font-[800] text-sm leading-snug">
                  Prince operates at the intersection of two critical domains: the
                  pursuit of enjoyment and the pragmatic resolution of business
                  challenges through design.
                  <br /> This approach enables Prince to deliver exceptional user
                  experiences while effectively addressing the needs of the
                  business.
                </p>
              </motion.div>

              {/* Center Profile */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full md:w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
              >
                <img 
                  src="/prince.png" 
                  alt="" 
                  className="w-[20rem] md:w-[31rem] mx-auto" 
                />
              </motion.div>

              {/* Links Section - Adjust top position for tablet */}
              <motion.div
                className="absolute top-[35rem] md:top-[43.625rem] left-[1rem] md:left-[9.9375rem] z-20 w-full md:w-fit"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="absolute top-8 left-0 flex">
                  {/* LinkedIn */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      skew: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="text-white w-[7.25rem] h-[6.938rem] ml-[-1.25rem]"
                  >
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/prince-isaac/"
                      className="block w-full h-full"
                    >
                      <img
                        src="/linkedin.png"
                        alt="LinkedIn"
                        className="w-full h-full"
                      />
                    </Link>
                  </motion.div>

                  {/* Dribbble */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      skew: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="text-white w-[7.25rem] h-[6.938rem] ml-[-1.25rem]"
                  >
                    <Link
                      target="_blank"
                      href="https://dribbble.com/princeisaac"
                      className="block w-full h-full"
                    >
                      <img
                        src="/dribble.png"
                        alt="Dribble"
                        className="w-full h-full"
                      />
                    </Link>
                  </motion.div>

                  {/* Behance */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      skew: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="text-white w-[7.25rem] h-[6.938rem] ml-[-1.25rem]"
                  >
                    <Link
                      target="_blank"
                      href="https://www.behance.net/princeisaac"
                      className="block w-full h-full"
                    >
                      <img
                        src="/behance.png"
                        alt="Behance"
                        className="w-full h-full"
                      />
                    </Link>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      skew: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="text-white w-[7.25rem] h-[6.938rem] ml-[-1.25rem]"
                  >
                    <Link
                      target="_blank"
                      href="https://github.com/isaacprince"
                      className="block w-full h-full"
                    >
                      <img
                        src="/github.png"
                        alt="GitHub"
                        className="w-full h-full"
                      />
                    </Link>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      skew: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className="text-white w-[7.25rem] h-[6.938rem] ml-[-1.25rem]"
                  >
                    <Link
                      href="mailto:isaacprince002@gmail.com"
                      target="_blank"
                      className="block w-full h-full"
                    >
                      <img
                        src="/email.png"
                        alt="Email"
                        className="w-full h-full"
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side Notes - Each with absolute positioning */}
              {/* CV Note */}
              <motion.div
                className="absolute top-[11.375rem] right-[1rem] md:right-[15.375rem] w-[8.708rem] z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  skew: -5,
                }}
              >
                <Link
                  href="https://docs.google.com/document/d/1V71I5XEU6sNjQYbbp_OR01lRsljHkSKBH_HKVLuB3Gk/edit?tab=t.0"
                  target="_blank"
                >
                  <img src="/cv.png" alt="" className="w-full h-[9.72875rem]" />
                </Link>
              </motion.div>

              {/* Likes Note */}
              <motion.div
                className="absolute top-[25.0625rem] right-[14.0625rem] w-[9.0625rem] z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img src="/likes.png" alt="" className="w-full" />
              </motion.div>

              {/* Selected Work Note */}
              <motion.div
                className="absolute top-[38.6875rem] cursor-pointer right-[9.875rem] w-[10.9375rem] z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  skew: -5,
                }}
              >
                <Link href="#projects">
                  <img src="/work.png" alt="" className="w-full" />
                </Link>
              </motion.div>

              {/* Playground Note */}
              <motion.div
                className="absolute top-[42.9375rem] cursor-pointer right-[24.75rem] w-[10.9375rem] z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  skew: -5,
                }}
              >
                <Link href="/playground">
                  <img src="/playground.png" alt="" className="w-full" />
                </Link>
              </motion.div>

              {/* lines */}
              <div className="hidden md:block">
                <motion.div
                  className="absolute top-[14.875rem] left-[24.0625rem] w-[53.4375rem] z-10"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  <img src="/line1.png" alt="" className="w-full" />
                </motion.div>
                <motion.div
                  className="absolute top-[14.375rem] left-[20.9375rem] w-[57.3125rem] z-10"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  <img src="/line2.png" alt="" className="w-full" />
                </motion.div>
                <motion.div
                  className="absolute top-[14.625rem] right-[18.875rem] h-[17.1875rem] z-10"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  <img src="/line3.png" alt="" className="h-full" />
                </motion.div>
                <motion.div
                  className="absolute top-[27.75rem] right-[17.5625rem] h-[15.1875rem] z-10"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 1, delay: 1.4 }}
                >
                  <img src="/line4.png" alt="" className="h-full" />
                </motion.div>
                <motion.div
                  className="absolute top-[39.125rem] right-[17rem] w-[15.1875rem] z-10"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <img src="/line5.png" alt="" className="w-full" />
                </motion.div>
              </div>

              {/* scroll down - adjust position for tablet */}
              <motion.div
                className="absolute top-[42rem] md:top-[50rem] left-1/2 w-[3.1875rem] -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <img src="/scroll.png" alt="" className="w-full" />
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </main>
      {/* selected projects */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center bg-[#111111] pt-[3rem] md:pt-[6.875rem] px-4 sm:px-8 md:px-[6.25rem] mt-8 lg:mt-[12.375rem]"
      >
        <div className="flex justify-start w-full">
          <h1 className="text-[#FF6600] text-[1.75rem] sm:text-[2.5rem] font-normal mb-[2rem] md:mb-[2.4375rem] ml-0 md:ml-[5rem] font-neueMachina">
            Selected Projects
          </h1>
        </div>

        {/* Project 1 — Combyn */}
        <div
          ref={project4Ref}
          className="relative w-full flex flex-col lg:flex-row items-center justify-center mb-[2rem] gap-8 lg:gap-[11.875rem]"
        >
          <motion.div
            className="hidden lg:block absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject4InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative w-full max-w-[43.4375rem] lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/combyn/project4.png"
              alt="Combyn Garage"
              width={4320}
              height={3072}
              quality={95}
              sizes="(max-width: 1024px) 100vw, 695px"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            className="relative w-full max-w-[23.0625rem] lg:w-[23.0625rem] z-20"
          >
            <div className="relative min-h-[23rem] bg-[#fef08a] rounded-[1.25rem] border-2 border-black p-6 text-[#323334] shadow-xl rotate-1">
              <p className="font-neueMachinaBold text-[1.4rem] mb-4">
                Combyn Garage
              </p>
              <div className="space-y-3 font-neueMachinaBold text-sm leading-snug">
                <p>
                  <span className="block text-[0.7rem] uppercase tracking-wide">
                    Role
                  </span>
                  Product Designer
                </p>
                <p>
                  <span className="block text-[0.7rem] uppercase tracking-wide">
                    Location
                  </span>
                  London
                </p>
                <p>
                  <span className="block text-[0.7rem] uppercase tracking-wide">
                    Timeline
                  </span>
                  Sep 2025 - Present
                </p>
                <p>
                  <span className="block text-[0.7rem] uppercase tracking-wide">
                    Tools
                  </span>
                  Figma, Miro, Adobe Creative Cloud, Sketch
                </p>
              </div>
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <Link
                  href="/case-studies/combyn/"
                  className="relative border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div
          ref={project1Ref}
          className="relative w-full flex flex-col lg:flex-row items-center justify-center mb-[2rem] gap-8 lg:gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="hidden lg:block absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject1InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            className="hidden lg:block absolute top-[13rem] h-[38.5rem] right-[18.125rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject1InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img src="/line7.png" alt="" className="h-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative w-full max-w-[43.4375rem] lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/project1.png"
              alt="Afro Eats Mobile App"
              width={695}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            className="relative w-full max-w-[23.0625rem] lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details1.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <Link
                  href="/case-studies/cravings/"
                  className="border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Project 3 */}
        <div
          ref={project2Ref}
          className="relative w-full flex flex-col lg:flex-row items-center justify-center mb-[2rem] gap-8 lg:gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="hidden lg:block absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject2InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            className="hidden lg:block absolute top-[13rem] h-[38.5rem] right-[18.125rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject2InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.7 }}
          >
            <img src="/line7.png" alt="" className="h-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative w-full max-w-[43.4375rem] lg:w-[43.4375rem] z-20"
            >
            <Image
              src="/project2.png"
              alt="InDAO Mobile App"
              width={650}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            className="relative w-full max-w-[23.0625rem] lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details2.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              {/* Yellow overlay to cover the existing button */}
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <div className="absolute -bottom-5 left-2/4 -translate-x-1/2 w-2/4 h-[50px] bg-[#fef08a]" />
                <Link
                  href="/case-studies/indao/"
                  className="relative border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Project 4 */}
        <div
          className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[11.875rem]"
        >
          {/* lines */}
          <motion.div
            className="hidden lg:block absolute top-[8.55rem] right-[18.4375rem] w-[21.4375rem] z-10"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              isProject2InView
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/line6.png" alt="" className="w-full" />
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative w-full max-w-[43.4375rem] lg:w-[43.4375rem] z-20"
          >
            <Image
              src="/project3.png"
              alt="InDAO Mobile App"
              width={650}
              height={450}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isProject2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ rotate: -1.5, scale: 1.02 }}
            className="relative w-full max-w-[23.0625rem] lg:w-[23.0625rem] z-20"
          >
            <div className="relative">
              <Image
                src="/details3.png"
                alt="Project Details"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              {/* Yellow overlay to cover the existing button */}
              <div className="absolute bottom-[12%] left-0 w-full flex justify-center">
                <Link
                  href="/case-studies/nds/"
                  className="relative border-2 border-black px-[0.375rem] py-[0.09375rem] font-neueMachinaBold text-[#323334] rounded-md hover:bg-black hover:text-[#fef08a] transition-colors bg-[#fef08a] transform rotate-2 text-sm sm:text-base"
                >
                  VIEW PROJECT
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
