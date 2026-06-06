"use client";
import React from 'react';
import styles from './Hero.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactContainer}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionSubtitle}>04. What is Next?</span>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
      </div>
      
      <div className={styles.contactContent}>
        <p className={styles.contactText}>
          I am currently open to freelance opportunities and full-time software development tracks. 
          Whether you have a question or want to build a mobile/web product together, my inbox is always open!
        </p>
        
        {/* رابط بريدك الإلكتروني كزر ذهبي فخم */}
        <div className={styles.mailWrapper}>
        <a
  href="jadili2482003@gmail.com"
  className={styles.emailBtn}
>
  jadili2482003@gmail.com
</a>
        </div>
      </div>
    </section>
  );
}