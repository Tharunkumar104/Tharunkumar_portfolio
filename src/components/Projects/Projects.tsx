import React, { useState } from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  emoji: string;
  type: 'hardware' | 'software';
  tags: string[];
  links: {
    demo?: string;
    code?: string;
    details?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Safe Drive – Accident Detection & Prevention System',
    description: 'When an accident occurs, the system automatically sends the passenger\'s location along with personal details to their guardian, local control room, and the nearest hospital for immediate response.',
    emoji: '🚗',
    type: 'hardware',
    tags: ['IoT', 'Sensors', 'GSM', 'GPS', 'PLC'],
    links: { details: '#', code: 'https://github.com/Tharunkumar104/Safe-Drive' }
  },
  {
    id: 2,
    title: 'Automatic Juice Filler',
    description: 'A conveyor-based automation system that detects bottles using sensors and fills them automatically based on time or sensor control. Designed for industrial beverage production lines.',
    emoji: '🍊',
    type: 'hardware',
    tags: ['PLC', 'Automation', 'Sensors', 'Conveyor'],
    links: { details: '#' }
  },
  {
    id: 3,
    title: 'Skill Tracker',
    description: 'A mock interview and practice platform that helps users prepare for technical interviews. Features practice sessions, skill assessments, and progress tracking.',
    emoji: '📊',
    type: 'software',
    tags: ['React', 'JavaScript', 'Node.js'],
    links: { demo: 'https://frontend-z4xm.vercel.app/', code: 'https://github.com/Tharunkumar104/MERN-Full-Stack' }
  },
  {
    id: 4,
    title: 'To-Do List App',
    description: 'A task management application with an intuitive interface for creating, organizing, and tracking daily tasks. Won 2nd Prize at EIE Association Hackathon.',
    emoji: '✅',
    type: 'software',
    tags: ['React', 'JavaScript', 'CSS'],
    links: { demo: '#', code: 'https://github.com/Tharunkumar104/To-Do-List' }
  }
];

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'hardware' | 'software'>('all');

  const filteredProjects = projects.filter(
    project => activeTab === 'all' || project.type === activeTab
  );
return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
         <div className={styles.container}><h2 className={styles.title}>Featured Projects</h2>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'hardware' ? styles.active : ''}`}
            onClick={() => setActiveTab('hardware')}
          >
            Hardware
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'software' ? styles.active : ''}`}
            onClick={() => setActiveTab('software')}
          >
            Software
          </button>
        </div>
</div>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardEmoji}>{project.emoji}</span>
                <div className={styles.cardTitleWrapper}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardType}>
                    {project.type === 'hardware' ? 'Hardware Project' : 'Software Project'}
                  </span>
                </div>
              </div>

              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                {project.links.demo && (
                  <a href={project.links.demo} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    <LinkIcon />
                    Live Demo
                  </a>
                )}
                {project.links.code && (
                  <a href={project.links.code} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                    <CodeIcon />
                    View Code
                  </a>
                )}
                {project.links.details && !project.links.demo && !project.links.code && (
                  <a href={project.links.details} className={styles.cardLink}>
                    <LinkIcon />
                    View Details
                  </a>
                )}
                 </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
