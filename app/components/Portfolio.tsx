import React from 'react';
import styles from './Hero.module.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Helping Hand App",
      tech: "Flutter / Dart / Sensors",
      desc: ""
    },
    {
      title: "Lexi Learn",
      tech: "Nextjs / HTML / CSS / JAVASCRIPT / Nodejs",
      desc: "A Website , Learning English with Ai "
    }
  ];

  return (
    <section id="portfolio" className={styles.portfolioContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>03. Portfolio</span>
        <h2 className={styles.sectionTitle}>Recent Track Records</h2>
      </div>
      <div className={styles.portfolioGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectMeta}>{project.tech}</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            {/* <div className={styles.projectLink}>View Project Details →</div> */}
          </div>
        ))}
      </div>
    </section>
  );
}