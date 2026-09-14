import CaseStudyTemplate from "@/components/case-study-template";

const combynImage = (filename) => `/combyn/${encodeURIComponent(filename)}`;
const combynMobileImage = (filename) => `/combyn/mobile/${encodeURIComponent(filename)}`;

export default function CombynCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Combyn Garage"
      subtitle="Product design for a garage operations platform: onboarding, expense management, and the core dashboard experience, built within an established visual system."
      meta={[
        { label: "Role", value: "Product Designer" },
        { label: "Client", value: "Combyn, via Alexandra & Ike Consultancy" },
        { label: "Timeline", value: "September 2025 to Present" },
        { label: "Tools", value: "Figma, Miro, Adobe CC, Sketch" },
      ]}
      sections={[
        {
          heading: "Context",
          body: [
            "As Product Designer at Alexandra & Ike Consultancy, I work in a remote-first, multidisciplinary team designing and refining digital experiences for Combyn, a garage operations platform, within an already-established visual system.",
          ],
        },
        {
          heading: "Approach",
          list: [
            "Designed and refined product surfaces while working inside an existing visual system, rather than starting from a blank slate.",
            "Kept brand and interface consistency across web tools, presentations, and internal documentation.",
            "Ran stakeholder workshops to translate complex operational requirements into clear layouts and flows.",
            "Maintained organised Figma files and reusable components so the wider team could iterate without me being a bottleneck.",
          ],
        },
        {
          heading: "Overview",
          images: [
            { src: combynImage("Hero.png"), alt: "Combyn Garage hero overview" },
            { src: combynImage("project4.png"), alt: "Combyn Garage dashboard showcase" },
          ],
        },
        {
          heading: "Brand",
          images: [
            { src: combynImage("Logo 5.png"), alt: "Combyn logo exploration" },
            { src: combynImage("Logo 3.png"), alt: "Combyn logo system" },
            { src: combynImage("Logo 4.png"), alt: "Combyn brand mark" },
          ],
        },
        {
          heading: "Product",
          images: [
            { src: combynImage("Desktop - 1.png"), alt: "Combyn desktop dashboard" },
            { src: combynImage("Desktop - 2.png"), alt: "Combyn desktop experience" },
            { src: combynImage("Mobile App.png"), alt: "Combyn mobile app screens" },
          ],
        },
        {
          heading: "Mobile app",
          body: [
            "Alongside the web dashboard, I designed a companion mobile app so drivers and staff could submit and track expenses from the field: onboarding, authentication, a wallet overview, expense submission and approval, history, and account settings.",
            "Tap a screen to step through the flow.",
          ],
          phoneStrip: [
            { src: combynMobileImage("Splash Screen.png"), alt: "Combyn mobile splash screen", label: "Splash" },
            { src: combynMobileImage("Onboarding 1.png"), alt: "Combyn mobile onboarding step 1", label: "Onboarding" },
            { src: combynMobileImage("Onboarding 2.png"), alt: "Combyn mobile onboarding step 2", label: "Onboarding" },
            { src: combynMobileImage("Onboarding 3.png"), alt: "Combyn mobile onboarding step 3", label: "Onboarding" },
            { src: combynMobileImage("Sign up.png"), alt: "Combyn mobile sign in screen", label: "Sign in" },
            { src: combynMobileImage("Wallet.png"), alt: "Combyn mobile wallet overview", label: "Wallet" },
            { src: combynMobileImage("Expenses.png"), alt: "Combyn mobile expense submission", label: "Expenses" },
            { src: combynMobileImage("Approve.png"), alt: "Combyn mobile expense approval", label: "Approve" },
            { src: combynMobileImage("History.png"), alt: "Combyn mobile expense history", label: "History" },
            { src: combynMobileImage("Settings.png"), alt: "Combyn mobile settings", label: "Settings" },
          ],
        },
        {
          heading: "Landing",
          images: [
            { src: combynImage("Landing Page 1.png"), alt: "Combyn landing page design" },
            { src: combynImage("Landing Page Mobile.png"), alt: "Combyn mobile landing page" },
          ],
        },
        {
          heading: "Flows",
          images: [
            { src: combynImage("Onboarding.png"), alt: "Combyn onboarding flow" },
            { src: combynImage("Features.png"), alt: "Combyn features overview" },
            { src: combynImage("Expense.png"), alt: "Combyn expense management" },
            { src: combynImage("Display.png"), alt: "Combyn display screens" },
          ],
        },
        {
          heading: "Status",
          body: [
            "This is an ongoing engagement. The platform continues to evolve with new features and refinements each sprint.",
          ],
        },
      ]}
      nextProject={{ slug: "afro-eats", title: "Afro Eats" }}
    />
  );
}
