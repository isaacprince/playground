import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../utils/publicUrl';

const OnademaCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Ona Dema Branding - Basement Record';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page case-study-page--dark case-study-onadema">
      <Link to="/" className="back-button">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <h1>Onadema - Basement Record</h1>
          <p>&quot;yours truly&quot; Album release</p>

          <div className="project-details">
            <div className="detail-item">
              <h3>ROLE</h3>
              <ul>
                <li>Graphic / Visual Designer</li>
                <li>Web Developer</li>
                <li>Brand Designer</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>DURATION</h3>
              <p>3 months</p>
            </div>
            <div className="detail-item">
              <h3>INDUSTRY</h3>
              <ul>
                <li>Entertainment</li>
                <li>Lifestyle</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>YEAR</h3>
              <p>2025</p>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <section className="project-section">
          <div className="container">
            <img src={publicUrl('/images/onadema/Ona_dema.png')} alt="Ona Dema" />
          </div>
        </section>

        <section className="problem-section">
          <div className="problem-content">
            <h2 className="section-title">Overview</h2>
            <p>
              As part of a branding initiative under Basement Records, I led the visual direction for Ona Dema,
              an emerging artist breaking into the mainstream music scene. My focus was on crafting a bold,
              cohesive visual identity that reflected her unique sound and persona, while supporting the
              label&apos;s vision for her rollout.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Goal</h2>
            <p className="cs-prose-tight">
              Crafting a Distinct Visual Identity to Amplify Ona Dema&apos;s Sound and Story
            </p>
            <ul className="cs-list">
              <li>Define and establish a visually distinct identity for Ona Dema </li>
              <li>Create assets that build hype and visual cohesion across all platforms</li>
              <li>Support the album launch and tour rollout with digital and print-ready designs</li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Deliverables</h2>
            <h2 className="section-title">Album Cover Design</h2>
            <p className="cs-prose">
              Designed the official cover for Ona Dema&apos;s debut project, capturing the mood, themes, and
              tone of the album with a balance of visual symbolism and genre appeal.
            </p>
            <img src={publicUrl('/images/onadema/Album design.png')} alt="ona dema album design" />
            <img src={publicUrl('/images/onadema/cd_img.png')} alt="ona dema cd look" />
            <img src={publicUrl('/images/onadema/vinyl album.jpg')} alt="ona dema Vinyl album" />
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Website Design</h2>
            <p className="cs-prose">
              Created a responsive artist website that included tour information, music previews, a visual
              gallery, and merchandise integration, ensuring a smooth and immersive user experience.
            </p>
            <img src={publicUrl('/images/onadema/website.png')} alt="Ona Dema webstie design" />
            <a href="https://naijadesignsystem.webflow.io/" target="_blank" rel="noreferrer">
              Ona Dema Website
            </a>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Tour Mockups</h2>
            <p className="cs-prose">
              Developed branded mockups and visual assets for the album tour, including stage visuals, posters,
              merchandise previews, and promotional content for social media and press kits
            </p>
            <div className="merch-grid">
              <img src={publicUrl('/images/onadema/cap.png')} alt="Ona Dema Cap Design" />
              <img src={publicUrl('/images/onadema/cup.png')} alt="Ona Dema Cup Design" />
              <img src={publicUrl('/images/onadema/shirt.png')} alt="Ona Dema Shirt Design" />
              <img src={publicUrl('/images/onadema/flask.png')} alt="Ona Dema Flask Design" />
              <img src={publicUrl('/images/onadema/tote_bag.png')} alt="Ona Dema Tote Bag Design" />
            </div>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Media Kit</h2>
            <p className="cs-prose">
              Bold. Unapologetic. Unforgettable. Ona Dema is a rising force in the music scene, blending
              Afro-fusion rhythms with raw storytelling and genre-bending soundscapes. This media kit offers a
              complete snapshot of her brand, music, and movement under Basement Records. Inside, you&apos;ll
              find high-resolution press photos, official bios, tour visuals, past features, and promotional
              assets designed to capture the essence of Ona Dema&apos;s artistry. Whether you&apos;re a
              journalist, event promoter, or collaborator, this kit provides everything you need to experience
              and share the Ona Dema vibe.
            </p>
            <iframe
              title="Ona Dema media kit"
              src="https://drive.google.com/file/d/1BQI1Hlc-SwlLoJrRenpKnuoJ1pTZZEwx/preview"
              className="drive-embed"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default OnademaCaseStudy;
