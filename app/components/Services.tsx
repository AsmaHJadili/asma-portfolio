import React from 'react';
import styles from './Hero.module.css'; // يفضل الاحتفاظ بمسار ملفك الحالي
import { FiSmartphone, FiMonitor, FiZap } from 'react-icons/fi'; // استيراد الأيقونات النحيفة والمودرن

export default function Services() {
  const servicesList = [
    {
      icon: <FiSmartphone className={styles.serviceIcon} />,
      title: "Mobile App Development",
      description: <>Engineering robust, cross-platform mobile applications for <strong>Android and iOS</strong> using the <strong>Flutter</strong> framework with sensor integration and clean state management.</>
    },
    {
      icon: <FiMonitor className={styles.serviceIcon} />,
      title: "Responsive Web Development",
      description: <>Crafting modern, fast-loading, and SEO-friendly web applications using <strong>React and Next.js</strong>, fully optimized for all screen sizes.</>
    },
    {
      icon: <FiZap className={styles.serviceIcon} />,
      title: "Digital Solutions & Innovation",
      description: <>Transforming ideas into scalable <strong>digital products</strong>. Combining technical expertise with <strong>strategic thinking</strong> to deliver user-centric applications, integrate smart functionalities, and help businesses scale their digital presence.</>
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
            {/* حاوية الأيقونة الجديدة */}
            <div className={styles.iconContainer}>
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}