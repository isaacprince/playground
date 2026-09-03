import CaseStudyTemplate from "@/components/case-study-template";

const img = (filename) => `/cravings/${filename}`;

export default function CravingsCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Cravings"
      subtitle="Satisfy your cravings, pronto — get food delivered to your doorstep."
      meta={[
        { label: "Role", value: "UI/UX Designer, User Research" },
        { label: "Team", value: "PM, iOS/Android & web engineers" },
        { label: "Industry", value: "Food delivery" },
        { label: "Year", value: "2022" },
      ]}
      sections={[
        {
          heading: "The idea",
          body: [
            "As food delivery continues to gain popularity, the Cravings team set out to build a convenient way for people to order and enjoy their favourite meals from top restaurants at affordable rates, all from a single app.",
            "We defined four goals for the experience: a simple ordering process, strong restaurant discovery, easy navigation, and secure payments.",
          ],
          images: [
            { src: img("our-goals.png"), alt: "Four key objectives: simple ordering, restaurant options, easy navigation, secure payments" },
            { src: img("branding.png"), alt: "Cravings branding: typography, colour palette, and design principles" },
            { src: img("uikit.png"), alt: "Cravings UI kit" },
            { src: img("functionality.png"), alt: "Cravings core functionality overview" },
            { src: img("wireframe.png"), alt: "Cravings wireframes" },
          ],
        },
        {
          heading: "Building the experience",
          body: [
            "From there I designed the full journey end to end: onboarding and account creation, browsing and navigation, checkout and payment, and the tooling riders use to fulfil orders.",
          ],
          images: [
            { src: img("splash.png"), alt: "Cravings splash screen" },
            { src: img("authorization.png"), alt: "Cravings sign-up and authorization flow" },
            { src: img("navigation.png"), alt: "Cravings navigation" },
            { src: img("payment.png"), alt: "Cravings payment flow" },
            { src: img("checkout.png"), alt: "Cravings checkout flow" },
            { src: img("riders.png"), alt: "Cravings rider tooling" },
          ],
        },
        {
          heading: "Launch",
          body: [
            "Cravings publicly launched in Q1 2022. In the first weeks after launch, the platform reached:",
          ],
          stats: [
            { value: "24", label: "Active vendors" },
            { value: "6", label: "Locations" },
            { value: "100", label: "App downloads" },
          ],
          images: [{ src: img("live.png"), alt: "Cravings social media launch posts" }],
          link: {
            href: "https://www.youtube.com/watch?v=bmJ7qJrVTUY",
            label: "Watch the launch announcement",
          },
        },
        {
          heading: "Results",
          body: [
            "One month after launch, growth held up: active vendors grew from 24 to 42 (+75%) and app downloads grew from 100 to 1,000 — a 10x increase — while holding steady at 6 locations. The vendor network also diversified, with a wider mix of vendor types available at the one-month mark than at launch.",
          ],
          stats: [
            { value: "42", label: "Active vendors (+75%)" },
            { value: "6", label: "Locations" },
            { value: "1,000", label: "App downloads (10x)" },
          ],
          images: [
            {
              src: img("metrics3.png"),
              alt: "Vendor network charts comparing launch vs. one month post-launch",
              caption:
                "Charts 1A/1B show the vendor network at launch; 2A/2B show the same network one month later.",
            },
          ],
        },
        {
          heading: "Scaling beyond the app",
          body: [
            "Once the team validated demand on mobile, we expanded to reach more customers through a companion website.",
          ],
          images: [
            { src: img("scaling1.png"), alt: "Cravings website landing page" },
            { src: img("scaling2.png"), alt: "Cravings website, continued" },
            { src: img("there.png"), alt: "Cravings website section" },
          ],
        },
      ]}
      nextProject={{ slug: "nds", title: "Nigeria Design System" }}
    />
  );
}
