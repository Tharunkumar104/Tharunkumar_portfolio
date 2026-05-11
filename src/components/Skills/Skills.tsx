import React from 'react';
import styles from './Skills.module.css';

const hardwareSkills = [
  'PLC Programming (Ladder Logic)',
  'Distributed Control System (DCS)',
  'SCADA Systems',
  'Yokogawa PLC and DCS',
  'LabVIEW',
  'IoT & Embedded',
  'AutoCAD Electrical',
  'EPlan',
  'Proteus',
  'Keil μVision',
];

const softwareSkills = [
  'Python',
  'Java',
  'C Programming',
  'React / JavaScript',
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Technologies</h2>

        <div className={styles.skillsWrapper}>
          <div className={styles.skillGroup}>
            <h3 className={styles.groupTitle}>Hardware & Automation</h3>
            <div className={styles.tagsContainer}>
              {hardwareSkills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.skillGroup}>
            <h3 className={styles.groupTitle}>Software & Programming</h3>
            <div className={styles.tagsContainer}>
              {softwareSkills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
