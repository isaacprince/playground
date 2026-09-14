import CaseStudyTemplate from "@/components/case-study-template";

const img = (filename) => `/afro-eats/${filename}`;

export default function AfroEatsCaseStudy() {
  return (
    <CaseStudyTemplate
      title="Afro Eats"
      subtitle="Food is one-click away: a concept design for a food delivery app."
      meta={[
        { label: "Role", value: "UI/UX Designer" },
        { label: "Platform", value: "iOS" },
        { label: "Industry", value: "Food delivery" },
        { label: "Year", value: "2024" },
      ]}
      sections={[
        {
          heading: "The idea",
          body: [
            "Afro Eats is a concept design for a food delivery app that gets a favourite meal from a favourite restaurant to the customer's door in the shortest time possible.",
            "I explored the full product from the ground up: information architecture, branding, wireframes, and a complete UI kit, before designing every screen in the ordering journey.",
          ],
          images: [
            { src: img("mockup.jpg"), alt: "Afro Eats app shown across a set of iPhone mockups" },
            { src: img("intro.jpg"), alt: "Afro Eats intro: welcome screen and home feed" },
            { src: img("overview.jpg"), alt: "Overview grid of Afro Eats app screens" },
          ],
        },
        {
          heading: "Flow and branding",
          body: [
            "I mapped the end-to-end user flow first, from splash and authentication through search, ordering, checkout, and delivery tracking, to make sure the experience stayed simple and predictable at every step.",
            "The brand identity leans on a bold wordmark, a confident green, and Product Sans, giving the app an energetic, appetite-forward feel.",
          ],
          images: [
            { src: img("flow.jpg"), alt: "Afro Eats user flow diagram" },
            { src: img("branding.jpg"), alt: "Afro Eats branding: typography and colour palette" },
          ],
        },
        {
          heading: "Wireframes",
          body: [
            "Low-fidelity wireframes helped lock the layout and hierarchy of the core screens (search, listings, and detail pages) before moving into visual design.",
          ],
          images: [{ src: img("wireframes.jpg"), alt: "Afro Eats wireframes" }],
        },
        {
          heading: "From wireframe to final screen",
          body: [
            "A closer look at how five key screens evolved from structural wireframes into the finished UI, keeping the same layout logic while adding brand, imagery, and real content.",
          ],
          compare: [
            {
              label: "Home: trending restaurants and category browsing",
              wireframe: { src: img("compare-home-wireframe.png"), alt: "Home screen wireframe" },
              final: { src: img("compare-home-final.png"), alt: "Home screen final design" },
            },
            {
              label: "Log in: returning-user authentication",
              wireframe: { src: img("compare-login-wireframe.png"), alt: "Login screen wireframe" },
              final: { src: img("compare-login-final.png"), alt: "Login screen final design" },
            },
            {
              label: "Forgot password: account recovery",
              wireframe: { src: img("compare-forgot-wireframe.png"), alt: "Forgot password screen wireframe" },
              final: { src: img("compare-forgot-final.png"), alt: "Forgot password screen final design" },
            },
            {
              label: "Account: profile and settings entry points",
              wireframe: { src: img("compare-account-wireframe.png"), alt: "Account screen wireframe" },
              final: { src: img("compare-account-final.png"), alt: "Account screen final design" },
            },
            {
              label: "Restaurants: browsing and discovery list",
              wireframe: { src: img("compare-restaurants-wireframe.png"), alt: "Restaurants screen wireframe" },
              final: { src: img("compare-restaurants-final.png"), alt: "Restaurants screen final design" },
            },
          ],
        },
        {
          heading: "Building the experience",
          body: [
            "From onboarding through checkout, I designed the full ordering journey: account creation, browsing restaurants and dishes, building a cart, and tracking delivery in real time.",
          ],
          images: [
            { src: img("splash.jpg"), alt: "Afro Eats splash screens: eat, order, pay" },
            { src: img("create-account.jpg"), alt: "Afro Eats create account screen" },
            { src: img("home.jpg"), alt: "Afro Eats home screen with trending restaurants" },
            { src: img("search.jpg"), alt: "Afro Eats search and listings" },
            { src: img("restaurant.jpg"), alt: "Afro Eats restaurant page" },
            { src: img("menu.jpg"), alt: "Afro Eats restaurant menu" },
            { src: img("cart.jpg"), alt: "Afro Eats cart and checkout" },
            { src: img("delivery.jpg"), alt: "Afro Eats live delivery tracking" },
            { src: img("support.jpg"), alt: "Afro Eats support and FAQ" },
            { src: img("lifestyle.jpg"), alt: "Afro Eats delivery tracking used on the go" },
          ],
        },
      ]}
      nextProject={{ slug: "cravings", title: "Cravings" }}
    />
  );
}
