import CaseStudyTemplate from "@/components/case-study-template";
import EcospacesLayoutDemo from "@/components/ecospaces-layout-demo";

const img = (filename) => `/ecospaces/${encodeURIComponent(filename)}`;

export default function EcospacesCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Ecospaces"
      subtitle="Product design for the first AI workspace for sustainable event planning: the marketing site, waitlist, and the core workspace where planners track carbon in real time."
      meta={[
        { label: "Role", value: "Senior Product Designer (Design Engineer)" },
        { label: "Location", value: "Ecospaces, London" },
        { label: "Timeline", value: "January 2026 to Present" },
        { label: "Tools", value: "Figma, React, TypeScript, Claude, Framer, Tailwind CSS" },
      ]}
      sections={[
        {
          heading: "Context",
          body: [
            "Ecospaces is built by an architect and sustainability professional with seven years in the UK events industry, for planners who want to reduce the carbon footprint of every event without giving up speed or creativity.",
            "As Senior Product Designer, I work as a design engineer: designing responsive web and mobile experiences in Figma, then using Claude alongside React and TypeScript to turn those ideas into working prototypes and frontend components, from the brand mark and marketing site through the core planning workspace, live carbon tracking, vendor marketplace, and Luma, the product's AI planning assistant.",
          ],
          images: [{ src: img("Frame 62.png"), alt: "Ecospaces logo mark" }],
        },
        {
          heading: "Approach",
          list: [
            "Designed responsive web and mobile experiences in Figma, focused on accessibility and intuitive interactions to raise user satisfaction and hit WCAG compliance.",
            "Used Claude alongside React and TypeScript to turn design ideas into working prototypes and frontend components, cutting iteration time and enabling faster stakeholder feedback.",
            "Worked with engineers through implementation, reviewing builds and refining UI details and interactions before release.",
            "Built reusable UI patterns that keep the product consistent as new features are introduced.",
          ],
        },
        {
          heading: "Landing page & waitlist",
          body: [
            "The landing page introduces Ecospaces as the first AI workspace for sustainable event planning. Joining the waitlist takes under a minute and confirms by email, with the first 100 planners getting priority access.",
          ],
          images: [{ src: img("Desktop - 20.png"), alt: "Ecospaces join waitlist modal" }],
        },
        {
          heading: "Features",
          features: [
            {
              title: "Interactive Layout Planner",
              description: "Drag and drop furniture, staging, catering, and AV onto the floor plan. Carbon updates within 2 seconds of every change.",
            },
            {
              title: "Live Carbon Tracking",
              description: "See a carbon estimate against the pledge target in real time, with AI suggestions when a plan is at risk of missing it.",
            },
            {
              title: "Verified Vendor Marketplace",
              description: "Discover eco-verified suppliers ranked by their impact on the event, each with a transparent Eco Score.",
            },
            {
              title: "Sustainability Certificates",
              description: "Generate verified sustainability certificates after every event: download, share, and push to ESG platforms in one click.",
            },
          ],
        },
        {
          heading: "Meet Luma",
          body: [
            "Luma is the AI planning partner inside the workspace. It analyses the layout, supplier choices, and carbon pledge as planners build their event, then surfaces specific, applicable recommendations, like moving a catering station to cut transport emissions.",
            "Try it below: place furniture on the floor plan to trigger a live suggestion, then apply it to see the sustainability score update.",
          ],
          custom: <EcospacesLayoutDemo />,
        },
        {
          heading: "How it works",
          features: [
            { badge: "1", title: "Choose your venue", description: "Search the Ecospaces venue network or upload a floor plan. Every venue carries a Carbon Fingerprint Score." },
            { badge: "2", title: "Set your carbon pledge", description: "AI recommends a realistic carbon reduction target based on event type, guest count, and venue data." },
            { badge: "3", title: "Design your event", description: "Drag furniture, staging, AV, catering, and decor onto the floor plan, with live carbon updates as you build." },
            { badge: "4", title: "Receive your certificate", description: "Submit actuals after the event and get a verified, shareable sustainability certificate." },
          ],
        },
        {
          heading: "Status",
          body: [
            "Ecospaces is pre-launch. The marketing site and waitlist are live, and the first 100 planners to join get priority access when the workspace ships.",
          ],
          link: { href: "https://ecospaces.app/", label: "View the live site" },
        },
      ]}
      nextProject={{ slug: "combyn", title: "Combyn Garage" }}
    />
  );
}
