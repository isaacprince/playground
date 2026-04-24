import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../utils/publicUrl';

const NdsCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Nigerian Design System - Prince Isaac Portfolio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page case-study-page--dark">
      <Link to="/" className="back-button">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <h1>Nigerian Design System</h1>
          <p>Making the design system that works for all Nigerians</p>

          <div className="project-details">
            <div className="detail-item">
              <h3>ROLE</h3>
              <ul>
                <li>Product Designer</li>
                <li>UX Researcher</li>
                <li>Accessibility Specialist</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>DURATION</h3>
              <p>3 months</p>
            </div>
            <div className="detail-item">
              <h3>INDUSTRY</h3>
              <ul>
                <li>Government</li>
                <li>Design System</li>
                <li>Open Source</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>YEAR</h3>
              <p>2022</p>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-white">
        <section className="project-section">
          <div className="container">
            <img src={publicUrl('/images/nds/banner.png')} alt="NDS Banner" />
          </div>
        </section>

        <section className="problem-section">
          <div className="problem-content">
            <h2 className="section-title">Making the design system that works.</h2>
            <p>
              A design system is a set of standards, guidelines, and tools that help teams design and build
              digital products more efficiently and consistently. It serves as a single source of truth for
              the visual and interactive elements of a product, including typography, color, layout, and
              functionality.
            </p>
            <p>
              One of the main benefits of a design system is that it promotes consistency across a product or
              brand. By establishing a set of rules for design and development, a design system helps ensure
              that all parts of a product feel connected and cohesive, rather than Making sure the button group
              is consistent with the rest of the design system Make sure the button group is consistent with the
              rest of the design system, like a collection of unrelated features. This can be especially
              important for large organizations that have multiple teams working on different parts of the
              product.
            </p>
            <p>
              A design system can also help teams work more efficiently by providing a set of pre-designed and
              tested components that can be quickly and easily incorporated into new designs. This can save
              time and reduce the need for teams to start from scratch every time they work on a new feature or
              redesign an existing one.
            </p>
          </div>
        </section>

        <section className="problem-section">
          <div className="problem-content">
            <h2>Problem</h2>
            <p>
              The federal government of Nigeria operates numerous websites and digital applications, each with
              its own design language and user experience. This lack of consistency can be confusing and
              frustrating for citizens trying to access government services online.
            </p>
            <p>
              Furthermore, the lack of a centralized design system results in inefficient resource utilization
              because designers must recreate common UI elements and patterns for each new project.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <img src={publicUrl('/images/nds/problem.png')} alt="Problem Analysis" />
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Solution</h2>
            <p className="cs-prose">
              To address this problem, we propose the development of a design system that will provide a shared
              set of visual design principles and styles, as well as a library of reusable UI components and
              patterns, for use across all federal government digital products. This will improve the user
              experience for citizens as well as increase efficiency in the design and development process for
              government teams.
            </p>
            <p className="cs-prose">
              The team consisted of a product manager, brand designers, product designers, UX and content
              writers, and illustrators.
            </p>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Research & Process</h2>
            <p className="cs-prose-tight">
              We conducted user research to understand the common pain points and needs across our products. We
              also surveyed the design teams to gather their input and perspectives.
            </p>
            <p className="cs-prose-tight">
              Through this research, we identified the following goals for our design system:
            </p>
            <ul className="cs-list">
              <li>Promote consistency in the user experience</li>
              <li>Reduce design and development time by providing reusable components</li>
              <li>
                Enable teams to iterate on designs while maintaining brand consistency quickly
              </li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Definition</h2>
            <p className="cs-prose">
              Based on our research, we defined the scope of our design system as follows:
            </p>
            <ul className="cs-list">
              <li>A shared set of visual design principles and styles</li>
              <li>A library of reusable UI components and patterns</li>
              <li>A design process and documentation to guide teams in using the design system.</li>
            </ul>
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <h2 className="section-title">Design Components</h2>
            <p className="cs-prose">
              We began by creating and defining the foundation for the overall look and feel of our design
              system, which includes colors, typography, grid and space, and icons.
            </p>
            <img src={publicUrl('/images/nds/design1.png')} alt="Design Components 1" />
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <img src={publicUrl('/images/nds/design2.png')} alt="Design Components 2" />
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <img src={publicUrl('/images/nds/design16.png')} alt="Design Components 3" />
          </div>
        </section>

        <section className="project-section">
          <div className="container">
            <p className="cs-prose">
              Ensuring that the teams could easily find and use the design system resources. This included
              guidelines for using the components as well as a process for submitting new components or
              requests for changes to the design system
            </p>
            <h2 className="section-title">Next Steps</h2>
            <p className="cs-prose">
              The{' '}
              <a href="https://naijadesignsystem.webflow.io/" target="_blank" rel="noreferrer">
                website
              </a>{' '}
              is up and running, and open to contributors, who are willing to contribute, maintain, and scale
              the design system.
              <br />
              <br />
              Grateful appreciation is extended to the core contributors, as it is noted that not all
              individuals who exhibit heroic qualities are symbolically represented by the wearing of capes.
              💯🥂
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NdsCaseStudy;
