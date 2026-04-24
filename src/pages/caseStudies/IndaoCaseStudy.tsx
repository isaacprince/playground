import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../../utils/publicUrl';

const IndaoCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'InDAO - Prince Isaac Portfolio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="case-study-page case-study-page--light case-study-indao">
      <Link to="/" className="back-button">
        ← Back to Portfolio
      </Link>

      <section className="project-hero">
        <div className="project-hero-content">
          <h1>
            <span>In</span>
            <span>DAO</span>
          </h1>
          <p>Access all your DAOs in one place</p>

          <div className="phone-mockup">
            <img src={publicUrl('/images/indao/phone.png')} alt="InDAO Mobile App" />
          </div>

          <div className="project-details">
            <div className="detail-item">
              <h3>ROLE</h3>
              <ul>
                <li>Product Designer</li>
                <li>UX Researcher</li>
                <li>User Research</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>DURATION</h3>
              <p>1 week</p>
            </div>
            <div className="detail-item">
              <h3>INDUSTRY</h3>
              <ul>
                <li>Blockchain</li>
                <li>DeFi</li>
                <li>Mobile App</li>
              </ul>
            </div>
            <div className="detail-item">
              <h3>YEAR</h3>
              <p>2022</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">Product Overview</h2>
            <p className="section-text">
              DAOs give the direct power to the people. Meet the platform that lets you have such.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">The Problem Statement</h2>
            <p className="section-text">
              Crypto Newbies face difficulties before accomplishing their first meaningful contributions to a
              DAO: Finding DAOs to join, Understanding what a DAO represents & how to make meaningful
              contributions. Before we get started I&apos;ll like to explain what a DAO is.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">What is a DAO?</h2>
            <p className="section-text">
              A decentralized autonomous organization (DAO) is an emerging form of legal structure. With no
              central governing body, every member within a DAO typically shares a common goal and attempt to
              act in the best interest of the entity. Popularized through cryptocurrency enthusiasts and
              blockchain technology, DAOs are used to make decisions in a bottoms-up management approach.
            </p>
            <p className="section-text">
              A DAO is intended to improve the traditional management structure of many companies. Instead of
              relying on a single individual or small collection of individuals to guide the direction of the
              entity, a DAO intends to give every member a voice, vote, and opportunity to propose initiatives.
              A DAO also strives to have strict governance that is dictated by code on a blockchain.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">How does a DAO work?</h2>
            <p className="section-text">
              The rules of the DAO are established by a core team of community members through the use of smart
              contracts. These smart contracts lay out the foundational framework by which the DAO is to
              operate. They are highly visible, verifiable, and publicly auditable so any potential member can
              fully understand how the protocol is to function at every step.
            </p>
            <p className="section-text">
              Once these rules are formally written onto the blockchain, the next step is around funding: the
              DAO needs to figure out how to receive funding and how to bestow governance. This is typically
              achieved through token issuance, by which the protocol sells tokens to raise funds and fill the
              DAO treasury.
            </p>
            <p className="section-text">
              In return for their fiat, token holders are given certain voting rights, usually proportional to
              their holdings. Once funding is completed, the DAO is ready for deployment. At this point, once
              the code is pushed into production, it can no longer be changed by any other means other than a
              consensus reached through member voting.
            </p>
          </div>
        </section>

        <section className="research-section">
          <div className="content-container">
            <h2 className="section-title">Research & Insights</h2>
            <p className="section-text">
              First, I didn&apos;t want to build on the assumptions of the problem we had already, And at the
              same time, I didn&apos;t want to break what works already too.
            </p>
            <p className="section-text">
              I performed a research sessions, in the qualitative analysis I interviewed individuals trying to
              understand the difficulties they faced in finding a DAO, contributing to a DAO, did they
              understand what was tagged as a meaningful contribution in the DAO they joined. I also carried
              out quantitative analysis, a survey to get more insights.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <img
              src={publicUrl('/images/indao/image1.png')}
              alt="Survey responses conducted using Google form"
            />
            <p className="image-caption">Survey responses conducted using Google form</p>
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <img src={publicUrl('/images/indao/image2.png')} alt="Research findings and insights" />
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-subtitle">Synthesizing our problems</h2>
            <div className="synthesis-container">
              <img src={publicUrl('/images/indao/image3.png')} alt="Problem synthesis 1" />
              <img src={publicUrl('/images/indao/image4.png')} alt="Problem synthesis 2" />
              <img src={publicUrl('/images/indao/image5.png')} alt="Problem synthesis 3" />
            </div>
            <p className="image-caption">Survey responses conducted using Google form</p>
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <img
              src={publicUrl('/images/indao/card-sorting.png')}
              alt="Card sorting view of findings from research conducted"
            />
            <p className="image-caption">Card sorting view of findings from research conducted</p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">User Personas</h2>
            <div className="user-personas">
              {[
                ['user-persona-1.png', 'Alex', 'DeFi Enthusiast'],
                ['user-persona-2.png', 'Sarah', 'DAO Member'],
                ['user-persona-3.png', 'Mike', 'Crypto Investor'],
                ['user-persona-4.png', 'Emma', 'Blockchain Developer'],
                ['user-persona-5.png', 'David', 'DAO Governance'],
                ['user-persona-6.png', 'Lisa', 'Crypto Newbie'],
              ].map(([file, name, role]) => (
                <div key={file} className="persona-card">
                  <img src={publicUrl(`/images/indao/${file}`)} alt={`User Persona ${name}`} />
                  <div className="persona-name">{name}</div>
                  <div className="persona-role">{role}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="content-container">
            <p className="section-text">
              I also carried a competitive analysis by benchmarking against some of the DAOs already solving
              similar problems in the space, the choice of DAO I benchmarked against was informed by the
              alternatives indicated by individuals in the cause of the interviewing.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">What are the opportunities from the insights?</h2>
            <p className="section-text">
              During the ideation sessions, I adopted the &ldquo;How might we &rdquo; framework to help us
              convert our challenges to opportunities by answering the reframed questions and figuring out
              possible solutions centered around the key insights or problems from our research.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">HMW Framework (How might we)</h2>
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <img src={publicUrl('/images/indao/opportunities.png')} alt="Opportunities Analysis" />
          </div>
        </section>

        <section className="content-section">
          <div className="content-container">
            <h2 className="section-title">TheDesign</h2>
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <h2 className="section-subtitle">The Homepage</h2>
            <img src={publicUrl('/images/indao/framework1.png')} alt="Design Framework 1" />
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <h2 className="section-subtitle">The Explore Page</h2>
            <img src={publicUrl('/images/indao/framework2.png')} alt="Design Framework 2" />
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <img src={publicUrl('/images/indao/framework3.png')} alt="Design Framework 3" />
          </div>
        </section>

        <section className="content-section">
          <div className="image-container">
            <h2 className="section-subtitle">Rating and Reviews</h2>
            <p className="section-text">
              The rating and reviews section tackles the issue of users not knowing if a DAO is doing
              relatively ok or not. Only users who belong (joined) to the said DAO can rate and drop a review
              also.
            </p>
            <img src={publicUrl('/images/indao/framework4.png')} alt="Design Framework 4" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndaoCaseStudy;
