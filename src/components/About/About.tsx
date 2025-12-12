import React from 'react';
import styles from './About.module.css';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.photoWrapper}>
              <div className={styles.photoBg} />
              <img 
                src="/profile.jpg" 
                alt="Tharunkumar D" 
                className={styles.photo}
              />
            </div>
          </div>

          <div className={styles.textSection}>
            <p className={styles.tagline}>
              Building bridges between hardware and software
            </p>

            <p className={styles.paragraph}>
              I am <span className={styles.highlight}>Tharunkumar D</span>, pursuing B.E in Electronics & Instrumentation 
              Engineering at <span className={styles.highlight}>Kongu Engineering College</span>. I maintain a strong 
              academic record with a <span className={styles.highlight}>9.02 CGPA</span> through my 4th semester.
            </p>

            <p className={styles.paragraph}>
              I enjoy blending hardware automation with software development to build practical, impact-driven solutions. 
              My work spans <span className={styles.highlight}>PLC/SCADA/embedded systems</span> to 
              <span className={styles.highlight}> Python and React-based applications</span>. I focus on designing 
              robust systems that solve real problems — whether that's accident detection systems, automated filling 
              lines, or productivity tools.
            </p>

            <p className={styles.paragraph}>
              My passion lies in creating solutions that make a tangible difference. From designing safety-critical 
              systems that can save lives to building productivity tools that streamline workflows, I approach each 
              project with a problem-first mindset and a commitment to excellence.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>9.02</div>
                <div className={styles.statLabel}>CGPA</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>5+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>3</div>
                <div className={styles.statLabel}>Awards</div>
              </div>
            </div>

            <div className={styles.education}>
              <p className={styles.eduTitle}>Education</p>
              <p className={styles.eduName}>B.E. Electronics & Instrumentation Engineering</p>
              <p className={styles.eduDetails}>
                Kongu Engineering College • <span className={styles.cgpa}>CGPA: 9.02</span> (till 4th sem)
              </p>
            </div>

            <a 
              href="/Tharunkumar Resume..pdf" 
              className={styles.btnResume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
