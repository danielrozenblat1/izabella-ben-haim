// IconTextComponent.jsx
import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import ScrollReveal from "scrollreveal"
import styles from './NewBox.module.css';

const IconTextComponent = ({ title, description, icon }) => {
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500);
      };
      
    const playerRef1 = useRef(null);
    const containerRef = useRef(null);
    
    useEffect(() => {
      playerRef1?.current?.playFromBeginning();
    }, []);

    useEffect(() => {
      ScrollReveal().reveal(`.${styles.contentWrapper}`, {
        duration: 1000,
        distance: "30px",
        origin: "right",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 300,
        delay: 200,
        scale: 1,
      });
    }, []);

    return (
      <div className={styles.container} ref={containerRef}>
        <div className={styles.iconWrapper}>
          <Player 
            icon={icon} 
            ref={playerRef1} 
            size="100%" 
            onComplete={handleComplete}
          />
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );
};

export default IconTextComponent;