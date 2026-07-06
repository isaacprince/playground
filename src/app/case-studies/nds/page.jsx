import Image from "next/image";
import React from "react";
import BackButton from "@/components/back-button";

export default function page() {
  return (
    <div className="px-4 sm:px-8 md:px-[6.25rem] py-[3rem] md:py-[5rem] font-inter">
      <BackButton className="mb-8" />
      <div className="w-full">
        <Image
          src="/nds/banner.png"
          alt="nds landing page"
          width={1440}
          height={205}
          className="w-full h-auto"
        />
      </div>
      <div className="mt-[4.3125rem]">
        <p className="text-[2rem] font-semibold text-black">
          Making the design system that works.
        </p>
        <p className="text-[1.5rem] font-normal text-black">
          A design system is a set of standards, guidelines, and tools that help
          teams design and build digital products more efficiently and
          consistently. It serves as a single source of truth for the visual and
          interactive elements of a product, including typography, color,
          layout, and functionality.
        </p>
        <br />
        <br />
        <br />
        <p className="text-[1.5rem] font-normal text-black">
          One of the main benefits of a design system is that it promotes
          consistency across a product or brand. By establishing a set of rules
          for design and development, a design system helps ensure that all
          parts of a product feel connected and cohesive, rather than Making
          sure the button group is consistent with the rest of the design system
          Make sure the button group is consistent with the rest of the design
          system, like a collection of unrelated features. This can be
          especially important for large organizations that have multiple teams
          working on different parts of the product.
        </p>
        <br />
        <br />
        <br />
        <p className="text-[1.5rem] font-normal text-black">
          A design system can also help teams work more efficiently by providing
          a set of pre-designed and tested components that can be quickly and
          easily incorporated into new designs. This can save time and reduce
          the need for teams to start from scratch every time they work on a new
          feature or redesign an existing one.
        </p>
      </div>
      <div className="mt-[4.3125rem]">
        <p className="text-[2.5rem] font-semibold text-black mb-[1.75rem]">
          Problem
        </p>
        <p className="text-[1.5rem] font-normal text-black mb-[1.5rem]">
          The federal government of Nigeria operates numerous websites and
          digital applications, each with its own design language and user
          experience. This lack of consistency can be confusing and frustrating
          for citizens trying to access government services online. Furthermore,
          the lack of a centralized design system results in inefficient
          resource utilization because designers must recreate common UI
          elements and patterns for each new project.
        </p>
        <div className="w-full">
          <Image
            src="/nds/problem.png"
            alt="nds landing page"
            width={1440}
            height={205}
            className="w-full h-auto"
          />
        </div>
      </div>
      <article className=" py-[4rem] space-y-16">
        {/* Introduction */}
        <div className="space-y-6">
          <p className="text-[1.5rem] font-normal text-black">
            To address this problem, we propose the development of a design
            system that will provide a shared set of visual design principles
            and styles, as well as a library of reusable UI components and
            patterns, for use across all federal government digital products.
            This will improve the user experience for citizens as well as
            increase efficiency in the design and development process for
            government teams.
          </p>
          <p className="text-[1.5rem] font-normal text-black">
            The team consisted of a product manager, brand designers, product
            designers, UX and content writers, and illustrators.
          </p>
        </div>

        {/* Research Section */}
        <section className="space-y-6">
          <h2 className="text-[2.5rem] font-semibold">Research</h2>
          <p className="text-[1.5rem] font-normal text-black">
            We conducted user research to understand the common pain points and
            needs across our products. We also surveyed the design teams to
            gather their input and perspectives.
          </p>
          <p className="text-[1.5rem] font-normal text-black">
            Through this research, we identified the following goals for our
            design system:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[1.5rem] font-normal text-black">
            <li>Promote consistency in the user experience</li>
            <li>
              Reduce design and development time by providing reusable
              components
            </li>
            <li>
              Enable teams to iterate on designs while maintaining brand
              consistency quickly
            </li>
          </ul>
        </section>

        {/* Definition Section */}
        <section className="space-y-6">
          <h2 className="text-[2.5rem] font-semibold">Definition</h2>
          <p className="text-[1.5rem] font-normal text-black">
            Based on our research, we defined the scope of our design system as
            follows:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[1.5rem] font-normal text-black">
            <li>A shared set of visual design principles and styles</li>
            <li>A library of reusable UI components and patterns</li>
            <li>
              A design process and documentation to guide teams in using the
              design system
            </li>
          </ul>
        </section>

        {/* Design Section */}
        <section className="space-y-6">
          <h2 className="text-[2.5rem] font-semibold">Design</h2>
          <p className="text-[1.5rem] font-normal text-black">
            We began by creating and defining the foundation for the overall
            look and feel of our design system, which includes colors,
            typography, grid and space, and icons.
          </p>
        </section>
      </article>
      <div className="mt-[4.3125rem]">
        <div className="w-full">
          <Image
            src="/nds/design1.png"
            alt="nds landing page"
            width={1440}
            height={205}
            className="w-full h-auto"
          />
        </div>
        <p className="text-[1.5rem] font-normal text-black my-[4.3125rem]">
          Next, we identified the most commonly used UI components and patterns
          across the federal government platform and created a library of these
          elements. such as
        </p>
        <div className="w-full">
          <Image
            src="/nds/design2.png"
            alt="nds landing page"
            width={1440}
            height={205}
            className="w-full h-auto"
          />
        </div>
        <p className="text-[1.5rem] font-normal text-black my-[4.3125rem]">
          Finally, we created and documented using zero height,
        </p>
        <div className="w-full">
          <Image
            src="/nds/design16.png"
            alt="nds landing page"
            width={1440}
            height={205}
            className="w-full h-auto"
          />
        </div>
        <p className="text-[1.5rem] font-normal text-black my-[4.3125rem]">
          Ensuring that the teams could easily find and use the design system
          resources. This included guidelines for using the components as well
          as a process for submitting new components or requests for changes to
          the design system
        </p>
        <h2 className="text-[2.5rem] font-semibold">Next step.</h2>
        <p className="text-[1.5rem] font-normal text-black">
          The{" "}
          <a
            href="https://naijadesignsystem.webflow.io/"
            target="_blank"
            className="underline"
          >
            website
          </a>{" "}
          is up and running, and open to contributors, who are willing to
          contribute, maintain, and scale the design system.
        </p>
        <br />
        <br />
        <p className="text-[1.5rem] font-normal text-black">
          Grateful appreciation is extended to the core contributors, as it is
          noted that not all individuals who exhibit heroic qualities are
          symbolically represented by the wearing of capes. 💯🥂
        </p>
      </div>
    </div>
  );
}
