import React from "react";
// import Image from "next/image";
import styles from "./Hero.module.css";
import Navbar from "./Navbar"; 

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <Navbar />

      <div className={styles.heroContent}>
        <div className={styles.leftCol}>
          <span className={styles.helloText}>Hello!</span>
          <h1 className={styles.mainTitle}>
            Im <span className={styles.nameHighlight}>Asma Jadili</span>
          </h1>
          <h2 className={styles.subTitle}>
            Mobile & Web Developer (Flutter | Next.js)
          </h2>
          <p className={styles.motto}>
            Bringing digital products to life by developing high-performance
            Flutter mobile apps and building fast, responsive web solutions with
            React and Next.js.
          </p>
          <div className={styles.btnGroup}>
            <a
              href="#contact"
              className={styles.primaryBtn}
              style={{
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Hire me
            </a>
            <button className={styles.tourBtn}>
              <a href="#about" className={styles.playIcon}>
                ▶
              </a>{" "}
              Start Tour
            </button>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.imageBackdrop}>
            {/* <div className={styles.radarCircle}></div>
            <div className={styles.radarLines}></div> */}

            <div className={styles.profileImgWrapper}>
              {/* <Image 
              className={styles.profileImage}
                src="/images/my.png" 
                alt="Asma Jadili" 
                width={290} 
                height={290} 
                style={{ objectFit: 'contain' }}
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
