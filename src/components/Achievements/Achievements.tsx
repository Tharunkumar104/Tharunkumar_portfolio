import React from 'react';
import styles from './Achievements.module.css';

interface Achievement {
  id: number;
  position: string;
  title: string;
  event: string;
  organization: string;
  icon: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    position: '2nd Prize',
    title: 'Hackathon – To-Do List Application',
    event: 'Hackathon Competition',
    organization: 'EIE Association',
    icon: '🏆'
  },
  {
    id: 2,
    position: '1st Prize',
    title: 'Paper Presentation: Accident Detection & Prevention System',
    event: 'Technical Paper Presentation',
    organization: 'IEI at PTU',
    icon: '🥇'
  },
  {
    id: 3,
    position: '2nd Prize',
    title: 'Paper Presentation: Smart Irrigation & Monitoring System',
    event: 'Technical Paper Presentation',
    organization: 'ISTE',
    icon: '🥈'
  }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className={styles.achievements}>
      <div className={styles.container}>
        <h2 className={styles.title}>Achievements & Awards</h2>

        <div className={styles.list}>
          {achievements.map((achievement) => (
            <article key={achievement.id} className={styles.item}>
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>{achievement.icon}</span>
              </div>

              <div className={styles.content}>
                <span className={styles.position}>{achievement.position}</span>
                <h3 className={styles.itemTitle}>{achievement.title}</h3>
                <p className={styles.event}>
                  {achievement.event} — <span className={styles.eventOrg}>{achievement.organization}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
