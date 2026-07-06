import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/back-button";

export default function IndaoCaseStudy() {
  return (
    <div className="wrapper">
      <div className="min-h-screen bg-[#E73D6E] relative overflow-hidden flex flex-col items-center py-[2.5rem] px-4 sm:px-8 md:px-[7.5rem]">
        <BackButton className="self-start mb-8" />
        <div className="flex flex-col gap-[0.875rem] mb-[5rem]">
          <p className="font-agrandirBold text-[2.25rem] font-[800] leading-[2.925rem] text-center underline-skip-ink">
            <span className="text-black">In</span>
            <span className="text-blue-500">DAO</span>
          </p>
          <p className="font-dmSans text-[2.125rem] font-[700] leading-[2.777rem] text-left text-white">
            Access all your DAOs in one place
          </p>
        </div>
        <div className="relative">
          <Image
            src="/indao/circle.png"
            alt="Circle"
            layout="fixed"
            width={198}
            height={198}
            className="absolute top-0 right-0 w-[12.375rem] h-[12.375rem] z-0"
          />
          <Image
            src="/indao/zigzag.png"
            alt="Zigzag"
            layout="fixed"
            width={134.21}
            height={198.24}
            className="absolute bottom-14 -left-32 w-[8.388rem] h-[12.39rem] z-0 rotate-[-25.06deg]"
          />
          <Image
            src="/indao/phone.png"
            alt="InDAO Phone"
            layout="intrinsic"
            width={729}
            height={519}
            className="w-[45.8125rem] h-[32.8125rem] z-10 relative "
          />
        </div>
        <div className="absolute bottom-0 left-0 ml-[6.375rem] mb-[2.375rem] flex gap-4">
          <Image
            src="/indao/profile.png"
            alt="Duv"
            layout="intrinsic"
            width={58.16}
            height={58.16}
            className="w-[3.635rem] h-[3.635rem]"
          />
          <div className="flex items-center gap-2">
            <Image
              src="/indao/twitter.png"
              alt="Twitter Logo"
              width={23.54}
              height={23.54}
              className="w-[1.465rem] h-[1.465rem]"
            />
            <a
              href="https://x.com/izikprinx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-[DM Sans] font-normal text-[1.298rem] leading-[1.691rem] underline"
            >
              @izikprinx
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white">
        <section className="px-[6.25rem] pt-[2.5625rem]">
          <div className="flex flex-wrap font-dmSans font-semibold text-black gap-[3.3125rem] mb-[3.3125rem] items-center">
            <div className="flex items-center">
              <p className="text-[1.5rem] text-black  leading-[1.953rem]">
                Role :
              </p>
              <p className="text-[1.5rem] font-700 leading-[1.953rem]">
                {" "}
                Product Designer, UX researcher
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[1.5rem] text-black  leading-[1.953rem]">
                Duration :
              </p>
              <p className="text-[1.5rem]  leading-[1.953rem]"> 1 week</p>
            </div>
            <div className="flex items-center">
              <p className="text-[1.5rem] text-black  leading-[1.953rem]">
                Industry :
              </p>
              <p className="text-[1.5rem]  leading-[1.953rem]">
                {" "}
                Blockchain, DeFi
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-[1.5rem] text-black  leading-[1.953rem]">
                Year :
              </p>
              <p className="text-[1.5rem]  leading-[1.953rem]"> 2022</p>
            </div>
          </div>

          {/* Product Overview */}
          <div className="mb-[6.3125rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[0.234375rem]">
              Product Overview
            </h2>
            <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
              DAOs gives the direct power to the people, Meet the platform that
              lets you have such.
            </p>
          </div>

          {/* Problem Statement */}
          <div className="mb-[6.3125rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[0.234375rem]">
              The Problem Statement
            </h2>
            <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
              Crypto Newbies face difficulties before accomplishing their first
              meaningful contributions to a DAO : Finding DAOs to join,
              Understanding what a DAO represents & how to make meaningful
              contributions.Before we get started I'll like to explain what a
              DAO is.
            </p>
          </div>

          {/* What is a DAO */}
          <div className="mb-[6.3125rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[0.234375rem]">
              What is a DAO?
            </h2>
            <div className="space-y-[0.234375rem]">
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                A decentralized autonomous organization (DAO) is an emerging
                form of legal structure. With no central governing body, every
                member within a DAO typically shares a common goal and attempt
                to act in the best interest of the entity. Popularized through
                cryptocurrency enthusiasts and blockchain technology, DAOs are
                used to make decisions in a bottoms-up management approach.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                A DAO is intended to improve the traditional management
                structure of many companies. Instead of relying on a single
                individual or small collection of individuals to guide the
                direction of the entity, a DAO intends to give every member a
                voice, vote, and opportunity to propose initiatives. A DAO also
                strives to have strict governance that is dictated by code on a
                blockchain.
              </p>
            </div>
          </div>

          {/* How does a DAO work */}
          <div className="mb-[6.3125rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[0.234375rem]">
              How does a DAO work?
            </h2>
            <div className="space-y-[0.234375rem]">
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                The rules of the DAO are established by a core team of community
                members through the use of smart contracts. These smart
                contracts lay out the foundational framework by which the DAO is
                to operate. They are highly visible, verifiable, and publicly
                auditable so any potential member can fully understand how the
                protocol is to function at every step.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                Once these rules are formally written onto the blockchain, the
                next step is around funding: the DAO needs to figure out how to
                receive funding and how to bestow governance.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                This is typically achieved through token issuance, by which the
                protocol sells tokens to raise funds and fill the DAO treasury.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                In return for their fiat, token holders are given certain voting
                rights, usually proportional to their holdings. Once funding is
                completed, the DAO is ready for deployment.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                At this point, once the code is pushed into production, it can
                no longer be changed by any other means other than a consensus
                reached through member voting. That is, no special authority can
                modify the rules of the DAO; it is entirely up to the community
                of token holders to decide.
              </p>
            </div>
          </div>

          {/* Research & Insights */}
          <div className="mb-[6.3125rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[0.234375rem]">
              Research & Insights
            </h2>
            <div className="space-y-[0.234375rem]">
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                First, I didn't want to build on the assumptions of the problem
                we had already, And at the same time, I didn't want to break
                what works already too.
              </p>
              <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
                I performed a research sessions, in the qualitative analysis I
                interviewed individuals trying to understand the difficulties
                they faced in finding a DAO, contributing to a DAO, did they
                understand what was tagged as a meaningful contribution in the
                DAO they joined. I also carried out quantitative analysis, a
                survey to get more insights.
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center px-[6.25rem]">
          <div className="mb-[8.125rem]">
            <Image
              src="/indao/image1.png"
              alt="Image 1"
              width={972}
              height={545.47}
              className="w-[60.75rem] h-[34.09rem]"
            />
            <p className="font-DM-Sans font-[500] text-[1.25rem] leading-[1.635rem] text-center mt-[2.5625rem]">
              Survey responses conducted using Google form
            </p>
          </div>
          <Image
            src="/indao/image2.png"
            alt="Image 2"
            width={1217}
            height={542.16}
            className="w-screen h-auto mb-[8.125rem]"
          />
          <div className="flex flex-col items-start w-full">
            <p className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[2.1875rem]">
              Synthesizing our problems
            </p>
            <div className="bg-[#F0F0F0] flex justify-center py-[4.0625rem] relative w-full h-[26.125rem]">
              <Image
                src="/indao/image3.png"
                alt="Image 3"
                layout="fixed"
                width={222}
                height={128}
                className=" left-[12.0625rem] w-[13.875rem] h-[8rem] z-0 top-[3.4375rem]"
              />
              <Image
                src="/indao/image4.png"
                alt="Image 4"
                layout="fixed"
                width={222}
                height={158.33}
                className="bottom-0 left-[26.1875rem] w-[13.875rem] h-[9.91rem] z-0 mt-[9.25rem]"
              />
              <Image
                src="/indao/image5.png"
                alt="Image 5"
                layout="fixed"
                width={222}
                height={158.33}
                className=" right-[17.8125rem] w-[13.875rem] h-[9.91rem] z-0 top-[3.4375rem]"
              />
            </div>
            <div className="flex justify-center w-full">
              <p className="font-DM-Sans font-[500] text-[1.25rem] leading-[1.635rem] text-center mt-[0.5625rem]">
                Survey responses conducted using Google form
              </p>
            </div>
          </div>
          <div className="mb-[8.125rem] mt-[5.5625rem]">
            <Image
              src="/indao/card-sorting.png"
              alt="Image 6"
              width={1239}
              height={907.42}
              className="w-screen h-auto"
            />
            <p className="font-DM-Sans font-[500] text-[1.25rem] leading-[1.635rem] text-center mt-[2.5625rem]">
              Card sorting view of findings from research conducted
            </p>
          </div>

          <div className="mb-[8.125rem] w-full">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[4.9375rem]">
              User Personas
            </h2>
            <div className="flex justify-center gap-4 ">
              <Image
                src="/indao/user-persona-1.png"
                alt="User Persona 1"
                width={612}
                height={419}
                className="w-full h-[26.1875rem]"
              />
              <Image
                src="/indao/user-persona-2.png"
                alt="User Persona 2"
                width={612}
                height={419}
                className="w-full h-[26.1875rem]"
              />
            </div>
            <div className="flex justify-center gap-4 mt-[1rem]">
              <Image
                src="/indao/user-persona-3.png"
                alt="User Persona 3"
                width={612}
                height={556}
                className="w-full h-[34.75rem]"
              />
              <Image
                src="/indao/user-persona-4.png"
                alt="User Persona 4"
                width={612}
                height={556}
                className="w-full h-[34.75rem]"
              />
              <Image
                src="/indao/user-persona-5.png"
                alt="User Persona 5"
                width={612}
                height={556}
                className="w-full h-[34.75rem]"
              />
              <Image
                src="/indao/user-persona-6.png"
                alt="User Persona 6"
                width={612}
                height={556}
                className="w-full h-[34.75rem]"
              />
            </div>
          </div>
          <div>
            <p className="font-DM-Sans font-normal text-[1.875rem] leading-[2.8125rem] tracking-[-1.9%]">
              I also carried a competitive analysis by benchmarking against some
              of the DAOs already solving similar problems in the space, the
              choice of DAO I benchmarked against was informed by the
              alternatives indicated by individuals in the cause of the
              interviewing.
            </p>
            <div className="mt-[7.1875rem] flex flex-col items-start">
              <p className="font-agrandirBold font-[800] text-[1.75rem] leading-[2.275rem]">
                What are the opportunities from this insights?
              </p>
              <p className="font-DM-Sans font-normal text-[1.875rem] leading-[2.8125rem] tracking-[-1.9%]">
                During the ideation sessions, I adopted the "How might we "
                framework to help us convert our challenges to opportunities by
                answering the reframed questions and figuring out possible
                solutions centered around the key insights or problems from our
                research.
              </p>
              <Image
                src="/indao/opportunities.png"
                alt="Opportunities"
                width={681}
                height={859.76}
                className="w-[42.5625rem] h-[53.7375rem] mt-[2.5rem]"
              />
            </div>
          </div>
        </div>

        <div className="px-[6.25rem] mt-[10.75rem] flex flex-col items-center">
          <h2 className="font-agrandirBold font-[800] text-center text-[2.125rem] leading-[2.753rem] mb-[2.4375rem]">
            The Design
          </h2>
          <div className="flex justify-start w-full">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[4.5625rem]">
              The Home page
            </h2>
          </div>
          <Image
            src="/indao/framework1.png"
            alt="Image 1"
            width={1335}
            height={1002.47}
            className="w-[83.4375rem] h-[62.654375rem]"
          />
          <div className="flex justify-start w-full mt-[10.1875rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] mb-[4.5625rem]">
              Explore page
            </h2>
          </div>
          <Image
            src="/indao/framework2.png"
            alt="Image 1"
            width={1100}
            height={999}
            className="w-[68.75rem] h-[62.4375rem]"
          />
          <Image
            src="/indao/framework3.png"
            alt="Image 1"
            width={1100}
            height={999}
            className="w-[68.75rem] h-[62.4375rem] mt-[15.875rem]"
          />
          <div className="flex flex-col justify-start w-full mt-[10.1875rem] mb-[5.75rem]">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] ">
              Rating and Reviews
            </h2>
            <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
              The rating and reviews section tackles the issue of users not
              knowing if a DAO is doing relatively ok or not. Only users who
              belong (joined) to the said DAO can rate and drop a review also.
            </p>
          </div>
          <Image
            src="/indao/framework4.png"
            alt="Image 1"
            width={1335}
            height={2068}
            className="w-[83.4375rem] h-[129.25rem]"
          />
          <div className="flex flex-col justify-start w-full mt-[10.1875rem] ">
            <h2 className="font-agrandirBold font-[800] text-[2.125rem] leading-[2.753rem] ">
              Key Finding and Takeaway.
            </h2>
            <p className="font-DM-Sans font-[400] text-[2.125rem] leading-[2.753rem]">
              Good design takes time and iteration is the secret of design,
              having a deep understanding of the people you are designing for -
              who they are, thier needs, operations and processes is key, For me
              I was happy that I spent my time experimenting and learning a
              couple of new stuff: DAO transparency, efficiency, Autonomy,
              Anonymity, how DAOs will shape the future of the internet, while
              solving/designing the product.
            </p>
          </div>
          <div className="flex flex-col items-center mt-[12.625rem]">
            <h2 className="font-agrandirBold font-[800] text-center text-[2.125rem] leading-[2.753rem] mb-[0.375rem]">
              Thank you 👍
            </h2>
            <p className="font-DM-Sans font-[400] text-[1.875rem] leading-[2.4375rem] mb-[2.125rem]">
              If you made it this far you rock!!
            </p>
            <h2 className="font-agrandirBold font-[800] text-center text-[1.5625rem] leading-[2.753rem] mb-[2.4375rem]">
              Contact me
            </h2>
            <div className="mt-[1.25rem] flex gap-[4.9375rem] mb-[10rem]">
              <div className="flex items-center gap-2">
                <Image
                  src="/indao/twitterW.png"
                  alt="Twitter Logo"
                  width={23.54}
                  height={23.54}
                  className="w-[1.465rem] h-[1.465rem]"
                />
                <a
                  href="https://x.com/izikprinx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-[DM Sans] font-normal text-[1.298rem] leading-[1.691rem] underline"
                >
                  @izikprinx
                </a>
              </div>
              <div className="flex items-center gap-2 ">
                <Image
                  src="/indao/linkedin.png"
                  alt="Twitter Logo"
                  width={23.54}
                  height={23.54}
                  className="w-[1.465rem] h-[1.465rem]"
                />
                <a
                  href="https://www.linkedin.com/in/prince-isaac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-[DM Sans] font-normal text-[1.298rem] leading-[1.691rem] underline"
                >
                  Prince Isaac
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
