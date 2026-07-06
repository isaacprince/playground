import Image from "next/image";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import BackButton from "@/components/back-button";

const combynImage = (filename) =>
  `/combyn/${encodeURIComponent(filename)}`;

const showcaseSections = [
  {
    title: "Overview",
    images: [
      { src: "Hero.png", alt: "Combyn Garage hero overview" },
      { src: "project4.png", alt: "Combyn Garage dashboard showcase" },
    ],
  },
  {
    title: "Brand",
    images: [
      { src: "Logo 5.png", alt: "Combyn logo exploration" },
      { src: "Logo 3.png", alt: "Combyn logo system" },
      { src: "Logo 4.png", alt: "Combyn brand mark" },
    ],
  },
  {
    title: "Landing",
    images: [
      { src: "Landing Page 1.png", alt: "Combyn landing page design" },
      { src: "Landing Page Mobile.png", alt: "Combyn mobile landing page" },
    ],
  },
  {
    title: "Product",
    images: [
      { src: "Desktop - 1.png", alt: "Combyn desktop dashboard" },
      { src: "Desktop - 2.png", alt: "Combyn desktop experience" },
      { src: "Mobile App.png", alt: "Combyn mobile app screens" },
    ],
  },
  {
    title: "Flows",
    images: [
      { src: "Onboarding.png", alt: "Combyn onboarding flow" },
      { src: "Features.png", alt: "Combyn features overview" },
      { src: "Expense.png", alt: "Combyn expense management" },
      { src: "Display.png", alt: "Combyn display screens" },
    ],
  },
];

export default function CombynCaseStudy() {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Nav />
      <section className="px-4 sm:px-8 md:px-[6.25rem] py-[3rem] md:py-[5rem]">
        <BackButton className="mb-8" />
        <h1 className="text-[#FF6600] text-[2rem] md:text-[2.5rem] font-neueMachina mb-4">
          Combyn Garage
        </h1>
        <p className="text-[#E7E7E7] text-base md:text-lg font-inter max-w-3xl mb-10">
          As a Product Designer at Alexandra & Ike Consultancy LTD in London, I
          collaborated in a remote-first, multidisciplinary environment to
          design and refine digital experiences for Combyn within an established
          visual system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-white font-inter">
          <div className="border border-[#333] rounded-2xl p-6 bg-[#171717]">
            <p className="text-[#FF6600] text-sm uppercase tracking-wider mb-2">
              Role
            </p>
            <p className="text-xl font-semibold">Product Designer</p>
          </div>
          <div className="border border-[#333] rounded-2xl p-6 bg-[#171717]">
            <p className="text-[#FF6600] text-sm uppercase tracking-wider mb-2">
              Company
            </p>
            <p className="text-xl font-semibold">
              Alexandra & Ike Consultancy LTD, London
            </p>
          </div>
          <div className="border border-[#333] rounded-2xl p-6 bg-[#171717]">
            <p className="text-[#FF6600] text-sm uppercase tracking-wider mb-2">
              Timeline
            </p>
            <p className="text-xl font-semibold">September 2025 - Present</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 font-inter">
          <div className="text-[#E7E7E7]">
            <h2 className="text-[#FF6600] text-[1.75rem] font-neueMachina mb-5">
              What I Did
            </h2>
            <ul className="space-y-4 text-base md:text-lg leading-relaxed">
              <li>
                Designed and refined digital experiences while working within an
                established visual system.
              </li>
              <li>
                Supported brand and interface consistency across web-based tools,
                presentations, and internal documentation.
              </li>
              <li>
                Participated in stakeholder workshops to translate complex
                requirements into clear, user-friendly layouts and flows.
              </li>
              <li>
                Maintained organised Figma files, reusable components, and
                clearly labelled assets to support collaboration and iteration.
              </li>
            </ul>
          </div>

          <div className="text-[#E7E7E7]">
            <h2 className="text-[#FF6600] text-[1.75rem] font-neueMachina mb-5">
              Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Figma",
                "Miro",
                "Photoshop",
                "Illustrator",
                "InDesign",
                "After Effects",
                "Sketch",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#FF6600] px-4 py-2 text-sm md:text-base text-[#FF6600]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {showcaseSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[#FF6600] text-[1.75rem] md:text-[2rem] font-neueMachina mb-6">
                {section.title}
              </h2>
              <div className="space-y-8">
                {section.images.map((image) => (
                  <div
                    key={image.src}
                    className="overflow-hidden rounded-2xl border border-[#333] bg-[#171717]"
                  >
                    <Image
                      src={combynImage(image.src)}
                      alt={image.alt}
                      width={4320}
                      height={3072}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      quality={95}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
