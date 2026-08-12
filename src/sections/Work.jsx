import React from 'react';
import { ArrowUpRight, ImagePlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const projects = [
  {
    id: 1,
    title: 'Cobolt Engineering',
    image: '/images/cobolt_tablet_mockup.png',
    tone: '#EFEFF5',
  },
  {
    id: 2,
    title: 'Entrain Careers',
    image: '/images/minimalistic-macbook-pro-mockup.png',
    tone: '#E9E9E9',
    contain: true,
  },
  {
    id: 3,
    title: 'Entrain Academy',
    image: '/images/mockup1.png',
    tone: '#E8E2D8',
  },
  {
    id: 4,
    title: 'Buckeez',
    image: '/images/buckeez_tablet_mockup.png',
    tone: '#E9EBF2',
  },
];

export default function Work() {
  return (
    <section id="work-section" className="work-section">
      <div className="work-container">
        <Reveal direction="up">
          <div className="work-eyebrow">
            <span />
            <em>Selected Work</em>
            <span />
          </div>
          <h2 className="work-heading font-display">
            Recent Case Studies
          </h2>
        </Reveal>

        <div className="work-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.1} direction="up">
              <article className="work-card group">
                <div
                  className="work-media"
                  style={{ backgroundColor: project.tone }}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} website case study`}
                      className={`work-image ${project.contain ? 'work-image-contain' : ''}`}
                    />
                  ) : (
                    <div className="work-placeholder">
                      <div className="w-16 h-16 rounded-full bg-white/55 border border-black/10 flex items-center justify-center mb-5">
                        <ImagePlus className="w-6 h-6 text-black/45" strokeWidth={1.5} />
                      </div>
                      <span className="font-display text-2xl sm:text-3xl font-medium text-black/55">Website screenshot</span>
                      <span className="text-sm text-black/40 mt-2">Add project image here</span>
                    </div>
                  )}

                  <div className="work-arrow">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="work-meta">
                  <h3 className="font-display">
                    {project.title}
                  </h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" className="work-more-row">
          <Link to="/workdetails" className="work-more-link">
            <span>More Works</span>
            <ArrowUpRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
