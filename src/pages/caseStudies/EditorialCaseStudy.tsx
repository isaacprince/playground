import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../utils/publicUrl';

const EditorialCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Editorial Design';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page case-study-page--dark">
      <Link to="/" className="back-button">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <h1>Editorial Design Publications</h1>
          <p />

          <div className="project-details">
            <div className="detail-item">
              <h3>ROLE</h3>
              <ul>
                <li>Graphic / Visual Designer</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>DURATION</h3>
              <p>4 months</p>
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
        <section className="problem-section">
          <div className="problem-content">
            <h2 className="section-title">Lovely grub</h2>
            <p>
              Lovely Grub is an eye-opening editorial publication that explores the growing trend of
              entomophagy — the practice of eating insects and worms. From roasted crickets to mealworm
              burgers, Lovely Grub dives into the cultural, environmental, and nutritional aspects of bug-based
              diets. Through interviews, recipes, and global stories, it challenges conventional ideas of food and
              highlights how these protein-rich alternatives could play a vital role in the future of
              sustainable eating.
            </p>
            <section className="project-section">
              <div className="container">
                <img
                  src={publicUrl('/images/Editorial /lovely_grub.png')}
                  alt="book cover of lovely grub"
                />
              </div>
              <br />
              <br />
              <iframe
                title="Lovely Grub publication preview"
                src="https://drive.google.com/file/d/1lyk73Qy-RPI0MtwkgZHBJ7i-Q2FVATvH/preview"
                className="drive-embed"
                allowFullScreen
              />
            </section>
          </div>
        </section>

        <section className="problem-section">
          <div className="problem-content">
            <h2 className="section-title"> The Seed Block - Herloom Catalogue</h2>
            <p>
              Heirloom Seeds is a seasonal editorial publication dedicated to celebrating the rich history,
              diversity, and resilience of seeds. More than just a gardening magazine, Heirloom Seeds is a
              storytelling platform rooted in ecology, culture, sustainability, and heritage. Each issue dives
              into the world of heirloom and indigenous seed varieties, offering insight into their origins,
              cultivation practices, preservation efforts, and the communities that protect them. From rare
              vegetables with centuries-old lineage to traditional seed-saving techniques passed down through
              generations, Heirloom Seeds preserves the legacy of plants and people alike
            </p>
            <section className="project-section">
              <div className="container">
                <img
                  src={publicUrl('/images/Editorial /Heirloom Catalogue.png')}
                  alt="book cover of heirloom catalogue"
                />
              </div>
              <br />
              <br />
              <iframe
                title="Heirloom Catalogue preview"
                src="https://drive.google.com/file/d/1k43gW8wgetM9bAc7azfmXfI3ROvBWMDf/preview"
                className="drive-embed"
                allowFullScreen
              />
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditorialCaseStudy;
