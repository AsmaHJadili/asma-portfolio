
"use client";
import { useState, useEffect } from 'react';
import styles from './Hero.module.css'; // أو ملف الـ CSS الخاص بكِ

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // إظهار الزر فقط عندما ينزل المستخدم 300 بكسل للأسفل
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // دالة الصعود للأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // حركة صعود ناعمة وسلسة
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className={styles.scrollToTopBtn} 
          onClick={scrollToTop}
          aria-label="Return to top"
        >
          ▲
        </button>
      )}
    </>
  );
}