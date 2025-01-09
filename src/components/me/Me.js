import React from 'react';
import styles from './Me.module.css';
import izabell from "../../images/איזבל בן חיים תמונת תדמית.png";
import students from "../../images/איזבל בן חיים תלמידות.png"
import Students from '../recommends/Recommends';
const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={izabell} alt="איזבלה בין חיים" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>איזבלה בן חיים</h1>
          <div className={styles.subtitle}>"ההצלחות הכי גדולות מתחילות בהחלטה אחת אמיצה"</div>
          <p className={styles.description}>
            במשך שנים רבות בניתי קריירה יציבה בחברת אשראי מובילה, מקום שחשבתי שיהיה ביתי המקצועי לתמיד. 
            אבל החיים הביאו איתם שינויים - הקמתי משפחה, הפכתי לאמא, וכשחזרתי מחופשת הלידה, משהו השתנה - היחס כלפי וכל מה שנתתי במקום העבודה "נמחק". 
            הבנתי שהגיע הזמן להקשיב ללב ולא לפחד לחלום בגדול.
          </p>
          <p className={styles.description}>
            באותו יום קיבלתי החלטה ששינתה את חיי -התפטרתי ונרשמתי ללימודי לק ג׳ל. היום, שלוש שנים מאוחר יותר, 
            אני בעלת עסק עצמאי עם יומן מלא . 
            אני מבינה בדיוק את האתגרים שבדרך, כי גם אני הייתי שם - אמא צעירה שהעזה לשנות כיוון. 
            הסיפור שלי מוכיח שתמיד אפשר להתחיל מחדש ולהגשים חלומות, בכל גיל ובכל שלב בחיים והגיע הזמן שגם הסיפור שלך יהפוך להיות סיפור הצלחה.
          </p>
        </div>
      </div>
    
      <Students/>
    </>
  );
};

export default AboutMe;