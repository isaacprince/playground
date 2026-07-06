import Image from "next/image";
import BackButton from "@/components/back-button";

export default function CravingsCaseStudy() {
  return (
    <div>
      <div
        className="min-h-screen text-white bg-[#111111]"
        style={{
          backgroundImage: "url(/cravings/cravingsbg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <section className="relative">
          <div className="px-4 sm:px-8 md:px-[6.25rem] pt-[3rem] md:pt-[8.3125rem] pb-[8.3125rem]">
            <BackButton className="mb-10" />
            <h1 className="text-[2.5rem] md:text-[3.75rem] font-inter font-bold flex items-center gap-2">
              Hello{" "}
              <span role="img" aria-label="wave">
                👋🏻
              </span>
              , this is Cravings
            </h1>
            <p className="text-[1.625rem] leading-[2.6875rem] text-[#E7E7E7] font-inter">
              Satisfy your cravings, pronto - Get food delivered to your
              doorstep
            </p>

            {/* Idea Section */}
            <div className="grid grid-cols-12 gap-8 mt-[6.625rem] mb-[10.5625rem] font-inter">
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-[1.875rem] font-bold">Idea</h2>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-[1.625rem] text-[#E7E7E7] leading-[2.6875rem]">
                  As food delivery continues to gain popularity, the Cravings
                  team has come up with a convenient solution for consumers to
                  
                  order and enjoy their favourite meals from top restaurants atr
                  affordable rates all at the click of a button
                </p>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-[2rem] font-inter">
              <div>
                <h3 className="font-bold text-[1.625rem] text-white  mb-[1rem]">
                  ROLE
                </h3>
                <ul className="space-y-3 font-medium text-[1.25rem] leading-[1.5rem] text-[#E7E7E7]">
                  <li>UI Designer</li>
                  <li>UX Designer</li>
                  <li>User Research</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold  text-[1.625rem] text-white mb-[1rem]">
                  INDUSTRY
                </h3>
                <ul className="space-y-3 font-medium text-[1.25rem] leading-[1.5rem] text-[#E7E7E7]">
                  <li>Web</li>
                  <li>UX Designer</li>
                  <li>Usability Testing</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold  text-[1.625rem] text-white mb-[1rem]">
                  TEAM
                </h3>
                <ul className="space-y-3 font-medium text-[1.25rem] leading-[1.5rem] text-[#E7E7E7]">
                  <li>Product Manager</li>
                  <li>App Developer (IOS & Android)</li>
                  <li>Web developers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold  text-[1.625rem] text-white mb-[1rem]">
                  YEAR
                </h3>
                <p className="font-medium text-[1.25rem] leading-[1.5rem] text-[#E7E7E7]">
                  2022
                </p>
              </div>
            </div>

            {/* App Branding */}
            <div className="flex flex-col items-center">
              <div className="relative w-[30rem] h-[30rem]">
                <Image
                  src="/cravings/cravingslogo.png"
                  alt="Cravings app icon"
                  fill
                  className="rounded-3xl"
                />
              </div>
              <p className="text-[#fe2727] text-[2.5rem] font-normal font-chalkduster">
                Spark Joy With Cravings
              </p>
            </div>
          </div>
        </section>
      </div>
      <main className="w-full bg-white">
        {/* Goals Section */}
        <section className="w-full">
          <Image
            src="/cravings/our-goals.png"
            alt="Our goals diagram showing four key objectives for food ordering: simple ordering process, restaurant options, easy navigation, and secure payments"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </section>

        {/* Branding Section */}
        <section className="w-full">
          <Image
            src="/cravings/branding.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* UI kits */}
        <section className="w-full">
          <Image
            src="/cravings/uikit.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* functionalities */}
        <section className="w-full">
          <Image
            src="/cravings/functionality.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        <section className="w-full">
          <Image
            src="/cravings/wireframe.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
      </main>
      {/* more */}
      <section className="w-full">
        <p className="text-[#B40000] py-[3rem] text-center font-[400] font-chalkduster text-[2.5rem] leading-[3.1875rem]">
          More on what was done
        </p>
        {/* splash screen */}
        <section className="w-full">
          <Image
            src="/cravings/splash.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* authorization */}
        <section className="w-full">
          <Image
            src="/cravings/authorization.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* navigation */}
        <section className="w-full">
          <Image
            src="/cravings/navigation.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* payment */}
        <section className="w-full">
          <Image
            src="/cravings/payment.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>

        {/* fullstory */}
        <section className="w-full flex flex-col items-center gap-[3rem] px-[6.375rem]">
          <Image
            src="/cravings/unlock.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-[43.6875rem] h-[6.375rem]"
          />
          <Image
            src="/cravings/fullstory.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* checkout */}
        <section className="w-full">
          <Image
            src="/cravings/checkout.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
        {/* riders */}
        <section className="w-full">
          <Image
            src="/cravings/riders.png"
            alt="Branding section showing typography, color palette, and design principles"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </section>
      </section>

      {/* live */}
      {/* more */}
      <section className="w-full">
        <p className="text-[#B40000] py-[3rem] text-center font-[400] font-chalkduster text-[2.5rem] leading-[3.1875rem]">
          🎉WE ARE LIVE🎉
        </p>
        <div className="px-[6.5rem] py-[4rem] ">
          {/* Title and Description */}
          <div className="flex gap-[4.6875rem] mb-[9.5625rem] font-inter">
            <h2 className="text-[2.5rem] w-[21.875rem] font-bold leading-[3rem]">
              Its go time 🎉
            </h2>
            <span className="leading-[2.6875rem] w-fit text-[1.5rem] font-medium">
              Attention all foodies! We&apos;re thrilled to announce the
              cravings food application is now live! You can now enjoy a wide
              range of delicious food options from the comfort of your home.
              With just a few clicks, you can order your favorite meals from the
              best restaurants in town and have them delivered straight to your
              doorstep.
            </span>
          </div>

          {/* YouTube Video Embed */}
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/bmJ7qJrVTUY"
              title="He got caught but CRAVINGS saved him!!!"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        </div>
      </section>
      <main className="w-full">
        {/* Launch Banner */}
        <div className="w-full overflow-hidden  ">
          <Image
            src="/cravings/countdown_timer.png"
            alt="Launch Time Banner"
            width={1920}
            height={48}
            className="w-full h-auto"
          />
        </div>

        {/* Social Media Grid */}
        <div className="w-full p-4 mt-[4rem]">
          <div className="max-w-6xl mx-auto">
            <Image
              src="/cravings/live.png"
              alt="Social Media Posts Grid"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Success Metrics Section */}
        <section className="w-full px-[6.25rem] mt-[9.1875rem] font-inter">
          {/* Success Banner */}
          <Image
            src="/cravings/success.png"
            alt="Success Metric and Feedback"
            width={800}
            height={100}
            className="w-full max-w-md mx-auto h-auto"
          />

          {/* Initial Metrics */}
          <div className="mt-[6.6875rem]">
            <p className="text-[1.375rem] leading-[1.375rem] mb-[3.25rem]">
              In the first quarter of 2022, Cravings was publicly launched and
              we had;
            </p>
            <div className="w-full flex justify-center">
              <Image
                src="/cravings/metrics1.png"
                alt="Initial Metrics"
                width={689}
                height={205}
                className="w-[689px] h-auto"
              />
            </div>
          </div>

          {/* Growth Metrics */}
          <div className="mt-[2.625rem]">
            <p className="text-[1.375rem] leading-[2.3125rem] mb-[3.25rem]">
              As of writing this statement, which is one month after the initial
              launch, we are proud to report that the platform has experienced
              significant growth of ;
            </p>
            <div className="w-full flex justify-center">
              <Image
                src="/cravings/metrics2.png"
                alt="Growth Metrics"
                width={689}
                height={205}
                className="w-[689px] h-auto"
              />
            </div>
          </div>
          {/* Growth Metrics */}
        </section>
        <div className="mt-[2.625rem] px-[6.25rem] font-inter">
          <p className="text-[1.375rem] leading-[2.3125rem] mb-[3.25rem]">
            Charts 1A & 1B were designed to demonstrate the vendor network and
            the diverse types of vendors that were available during the launch
            of Cravings. On the other hand, Charts 2A & 2B have been created to
            reflect the current state of our vendor network, showcasing the
            various types of vendors that are currently available on our
            platform.
          </p>
          <div className="w-full">
            <Image
              src="/cravings/metrics3.png"
              alt="Growth Metrics"
              width={1440}
              height={205}
              className="w-full h-auto"
            />
          </div>
        </div>
      </main>
      <main className="w-full bg-white">
        {/* Title Section */}
        <section className="pt-[1rem] space-y-8">
          <div className="space-y-4 px-[6.25rem]">
            <Image
              src="/cravings/nextcause.png"
              alt="Next cause: Craving scaling..."
              width={388}
              height={102}
              className="w-[388px] max-w-2xl mx-auto h-auto"
            />
            <p className="text-[1.375rem] font-medium text-gray-700 max-w-3xl font-inter">
              After defining what success metric, cravings team decided to
              expand, hence reaching out to more customers, we worked on the
              website
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/cravings/scaling1.png"
              alt="Cravings landing page"
              width={1440}
              height={205}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/cravings/scaling2.png"
              alt="Cravings landing page"
              width={1440}
              height={205}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/cravings/there.png"
              alt="Cravings landing page"
              width={1440}
              height={205}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full">
            <Image
              src="/cravings/footer.png"
              alt="Cravings landing page"
              width={1440}
              height={205}
              className="w-full h-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
