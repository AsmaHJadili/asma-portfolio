import React from 'react';
import styles from './Hero.module.css';

export default function Services() {
  const servicesList = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Engineering robust, cross-platform mobile applications for Android and iOS using the Flutter framework with sensor integration and clean state management."
    },
    {
      icon: "💻",
      title: "Responsive Web Development",
      description: "Crafting modern, fast-loading, and SEO-friendly web applications using React and Next.js, fully optimized for all screen sizes."
    },
    {
      icon: "⚙️",
      title: "Backend & Scrapping Solutions",
      description: "Developing automated system tracks, RESTful APIs, and efficient data extraction scripts using Python and MongoDB database architectures."
    }
  ];

  return (
    <section id="services" className={styles.servicesContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>02. Services</span>
        <h2 className={styles.sectionTitle}>What I Do Best</h2>
      </div>
      <div className={styles.servicesGrid}>
        {servicesList.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}