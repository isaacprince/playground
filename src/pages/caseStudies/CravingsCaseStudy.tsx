import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../utils/publicUrl';

const CravingsCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Cravings - Prince Isaac Portfolio';
    window.scrollTo(0, 0);
  }, []);

  const img = (path: string, alt: string) => (
    <img src={publicUrl(path)} alt={alt} />
  );

  return (
    <div className="case-study-page case-study-page--light case-study-cravings">
      <Link to="/" className="back-button">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <h1>Hello 👋🏻, this is Cravings</h1>
          <p>Satisfy your cravings, pronto - Get food delivered to your doorstep</p>

          <div className="project-details">
            <div className="detail-item">
              <h3>ROLE</h3>
              <ul>
                <li>UI Designer</li>
                <li>UX Designer</li>
                <li>User Research</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>INDUSTRY</h3>
              <ul>
                <li>Food Delivery</li>
                <li>Mobile App</li>
                <li>Web Application</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>TEAM</h3>
              <ul>
                <li>Product Manager</li>
                <li>App Developer (iOS & Android)</li>
                <li>Web Developers</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>YEAR</h3>
              <p>2022</p>
            </div>
          </div>

          <div className="project-logo">
            {img('/images/cravings/cravingslogo.png', 'Cravings App Logo')}
            <p>Spark Joy With Cravings</p>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <section className="project-section">
          <div className="container">
            {img(
              '/images/cravings/our-goals.png',
              'Our Goals - Simple ordering process, restaurant options, easy navigation, secure payments'
            )}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img(
              '/images/cravings/branding.png',
              'Branding - Typography, color palette, and design principles'
            )}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/uikit.png', 'UI Kit - Design system and components')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/functionality.png', 'Functionality - App features and user flows')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/wireframe.png', 'Wireframes - Initial design concepts')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            <h2 className="cs-heading-accent">More on what was done</h2>
            {img('/images/cravings/splash.png', 'Splash Screen Design')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/authorization.png', 'Authorization Flow')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/navigation.png', 'Navigation Design')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/payment.png', 'Payment Flow')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/checkout.png', 'Checkout Process')}</div>
        </section>
        <section className="project-section">
          <div className="container">
            {img('/images/cravings/countdown_timer.png', 'Countdown Timer Feature')}
          </div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/success.png', 'Success State')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/riders.png', 'Rider Interface')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/scaling1.png', 'Scaling Strategy 1')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/scaling2.png', 'Scaling Strategy 2')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/metrics1.png', 'Metrics Dashboard 1')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/metrics2.png', 'Metrics Dashboard 2')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/metrics3.png', 'Metrics Dashboard 3')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/fullstory.png', 'Full Story')}</div>
        </section>
        <section className="project-section">
          <div className="container">{img('/images/cravings/footer.png', 'Footer Design')}</div>
        </section>
      </main>
    </div>
  );
};

export default CravingsCaseStudy;
