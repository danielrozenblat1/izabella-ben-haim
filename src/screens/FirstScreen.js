import React, { useEffect, useRef, useState } from 'react';
import styles from './FirstScreen.module.css';
import GradientLoader from '../components/loader/Loader';
import { ChevronDown } from 'lucide-react';

const FirstScreen = (props) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const topLeftImageRef = useRef(null);
    const topRightImageRef = useRef(null);
    const centerImageRef = useRef(null);
  
    useEffect(() => {
        // Get computed styles for all image refs
        const getBackgroundImageUrl = (ref) => {
            if (!ref.current) return null;
            const computedStyle = window.getComputedStyle(ref.current);
            const backgroundImage = computedStyle.backgroundImage;
            if (backgroundImage && backgroundImage !== 'none') {
                return backgroundImage.slice(4, -1).replace(/["']/g, "");
            }
            return null;
        };

        // Create array of unique image URLs
        const imageUrls = [
            getBackgroundImageUrl(topLeftImageRef),
            getBackgroundImageUrl(topRightImageRef),
            getBackgroundImageUrl(centerImageRef)
        ].filter(url => url !== null);

        // If no images to load, set as loaded
        if (imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        // Load all images
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = url;
            });
        };

        Promise.all(imageUrls.map(loadImage))
            .then(() => setImagesLoaded(true))
            .catch((err) => {
                console.error("Failed to load images", err);
                setImagesLoaded(true); // Set as loaded even on error to prevent infinite loading
            });
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
  
    if (!imagesLoaded) {
        return <GradientLoader />;
    }

    return <>
        <div className={props.scrolled ? styles.containerP : styles.container}>
            <div className={styles.intro}>איזבלה בין חיים מציגה</div>
            
            <div className={styles.mainContent}>
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
                
                <div className={styles.bottomText}>
                    ולהצליח לשלב בין משפחה לקריירה
                </div>
            </div>
        </div>
        <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40}  color="#686868" strokeWidth={1} />
      </div>
 </>
};

export default FirstScreen;