import React from 'react';
import styles from './Hero.module.css'; // سنستخدم نفس ملف التنسيق الموحد لسهولة التمرير

export default function About() {
  return (
    <section id="about" className={styles.aboutContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>01. About Me</span>
        <h2 className={styles.sectionTitle}>My Software Journey</h2>
      </div>
      <div className={styles.aboutContent}>
       <p>
  I am a passionate <strong className={styles.highlight}>Software Developer</strong> dedicated 
  to building high-performance mobile and web applications. With a strong foundation in 
  modern engineering patterns, I focus on turning complex problems into clean, scalable, 
  and efficient code.
</p>

<p>
  My technical expertise spans across building cross-platform mobile apps using 
  <strong> Flutter</strong> and crafting pixel-perfect, highly responsive web interfaces 
  with <strong>Next.js and React</strong>. I thrive on continuous learning and implementing 
  the best architecture standards in every project I deliver.
</p>
      </div>
    </section>
  );
}