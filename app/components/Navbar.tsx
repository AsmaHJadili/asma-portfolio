"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      {/* الشعار الذهبي الخاص بكِ */}
      <div className={styles.logoWrapper}>
        <Image 
          src="/images/asmajadili_logo.png" 
          alt="Asma Jadili Logo" 
          width={150} 
          height={55} 
          priority
          style={{ objectFit: 'contain' }}
          className={styles.logoImg}
        />
      </div>

      {/* روابط التنقل - تدعم التغير الديناميكي للشاشات الصغيرة */}
      <nav className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
        {/* تم تحويله إلى رابط ينقلك لأسفل الصفحة بسلاسة */}
        {/* <a href="#contact" className={styles.navBtn} onClick={() => setIsOpen(false)}>
  Hire me
</a> */}
      </nav>
      <a href="#contact" className={styles.navBtn} onClick={() => setIsOpen(false)}>
  Hire me
</a>

      {/* زر القائمة للشاشات الصغيرة (Hamburger Icon) */}
      <div className={`${styles.burger} ${isOpen ? styles.toggle : ''}`} onClick={toggleMenu}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </header>
  );
}