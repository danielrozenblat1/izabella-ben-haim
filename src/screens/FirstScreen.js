import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstScreen.module.css';

const FirstScreen = (props) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const topLeftImageRef = useRef(null);
    const topRightImageRef = useRef(null);
    const centerImageRef = useRef(null);
  
    useEffect(() => {
      const imageRefs = [topLeftImageRef, topRightImageRef, centerImageRef];
      let loadedCount = 0;
  
      const checkImageLoaded = (ref) => {
        if (ref.current) {
          const computedStyle = window.getComputedStyle(ref.current);
          const backgroundImage = computedStyle.backgroundImage;
          
          if (backgroundImage && backgroundImage !== 'none') {
            const img = new Image();
            img.src = backgroundImage.slice(4, -1).replace(/["']/g, "");
            
            if (img.complete) {
              loadedCount++;
            } else {
              img.onload = () => {
                loadedCount++;
                if (loadedCount === imageRefs.length) {
                  setImagesLoaded(true);
                }
              };
              img.onerror = () => {
                loadedCount++;
                if (loadedCount === imageRefs.length) {
                  setImagesLoaded(true);
                }
              };
            }
          } else {
            loadedCount++;
          }
        } else {
          loadedCount++;
        }
        
        if (loadedCount === imageRefs.length) {
          setImagesLoaded(true);
        }
      };
  
      imageRefs.forEach(checkImageLoaded);
    }, []);
  
    useEffect(() => {
      if (!imagesLoaded) return;
  
      const handleScroll = () => {
        const scrollY = window.scrollY;
        
        if (topLeftImageRef.current && topRightImageRef.current) {
          topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.25}px)`;
          topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.25}px)`;
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [imagesLoaded]);
  

  return (
    <div className={props.scrolled? styles.containerP: styles.container}>
      <div className={styles.intro}>איזבלה בין חיים מציגה</div>
      
      <div  className={styles.mainContent}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <div
              ref={topLeftImageRef}
              className={styles.topLeftImage}
            />
            <div
              ref={centerImageRef}
              className={styles.centerImage}
            />
            <div
              ref={topRightImageRef}
              className={styles.topRightImage}
            />
          </div>
          
          <div className={styles.glassText}>
            הדרך להגשים את עצמך
          </div>
        </div>
        
        <div  className={styles.bottomText}>
          ולהצליח לשלב בין משפחה לקריירה
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;