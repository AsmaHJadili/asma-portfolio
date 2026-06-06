import React from 'react';
import styles from './Hero.module.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Helping Hand App",
      tech: "Flutter / Dart",
      desc: "A cross-platform Flutter app that provides psychological support for children through fun, interactive games and activities.",
      github: "https://github.com/AsmaHJadili/helping_hand" // الرابط المباشر لمشروع الفلاتر
    },
    {
      title: "Lexi Learn",
      tech: "Next.js / React",
      desc: "An AI-powered web platform designed to help users learn English through interactive AI features.",
      github: "https://github.com/FarahWaseem/lexi-learn" // رابط حسابك أو المشروع
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
            
            {/* تحويل العنصر إلى رابط جيت هاب تفاعلي وحقيقي */}
            <div className={styles.projectLinkContainer}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.githubBtn}
              >
                View Code on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}