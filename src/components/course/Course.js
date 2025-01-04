import React, { useEffect } from 'react';
import styles from './Course.module.css';
import { 
  Sparkles, 
  GraduationCap, 
  Heart, 
  Store, 
  Gift, 
  Award,
  BookOpen,
  Users,
  HandCoins,
  Send,
  CheckCircle
} from 'lucide-react';

const CourseSyllabus = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(
      `.${styles.section}, .${styles.header}, .${styles.emphasisSection}`
    );
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/972507253630?text=היי איזבלה, אשמח לשמוע פרטים על קורס לק ג'ל`, '_blank');
  };

  return (
    <div className={styles.container} id="קורס מתחילות">
      <header className={styles.header}>
        <h1 className={styles.title}>קורס מניקור ולק ג'ל</h1>
        <p className={styles.subtitle}>מקצוע שבינה מלאכותית לא תחליף לעולם!</p>
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <GraduationCap className={styles.icon} />
            מה נלמד?
          </h2>
          <ul className={styles.list}>
            <li>
              <Heart className={styles.listIcon} />
              <span>מבנה הציפורן</span>
            </li>
            <li>
              <Heart className={styles.listIcon} />
              <span>מחלות ציפורניים נפוצות ודרכי התמודדות</span>
            </li>
            <li>
              <Heart className={styles.listIcon} />
              <span>הכרת כלי עבודה ומושגי יסוד בתחום</span>
            </li>
            <li>
              <Sparkles className={styles.listIcon} />
              <span>הסרת לק ג'ל בצורה נכונה</span>
            </li>
            <li>
              <BookOpen className={styles.listIcon} />
              <span>תיקון מבנה אנטומי וחיזוק הציפורן הטבעית</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Gift className={styles.icon} />
            בונוסים
          </h2>
          <ul className={styles.list}>
            <li>
              <Sparkles className={styles.listIcon} />
              <span>השלמת ציפורן בעזרת טיפסים בכל השיטות</span>
            </li>
            <li>
              <Store className={styles.listIcon} />
              <span>התנהלות עסקית נכונה</span>
            </li>
            <li>
              <Users className={styles.listIcon} />
              <span>סיטואציות מורכבות מול לקוחות ודרכי התמודדות</span>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Award className={styles.icon} />
            מה תקבלי?
          </h2>
          <ul className={styles.list}>
            <li>
              <BookOpen className={styles.listIcon} />
              <span>חוברת עבודה דיגיטלית</span>
            </li>
            <li>
              <BookOpen className={styles.listIcon} />
              <span>תעודת סיום קורס יוקרתית</span>
            </li>
            <li>
              <HandCoins className={styles.listIcon} />
              <span>ליווי אישי מאפס לפתיחת עסק משלך</span>
            </li>
          </ul>
        </section>

        <section className={styles.emphasisSection}>
          <h2 className={styles.emphasisTitle}>
            <CheckCircle className={styles.icon} />
            חשוב לי להדגיש:
          </h2>
          <ul className={styles.emphasisList}>
            <li>
              <CheckCircle className={styles.checkIcon} />
              <span>הקורס הוא אחת על אחת ויהיה לך את כל הזמן שבעולם לשאול שאלות ואת כל היחס שתצטרכי ממני</span>
            </li>
            <li>
              <CheckCircle className={styles.checkIcon} />
              <span>אני עוברת איתך בקורס גם על הפן המנטלי בלהיות עצמאית</span>
            </li>
            <li>
              <CheckCircle className={styles.checkIcon} />
              <span>אני זמינה לך גם אחרי הקורס לכל שאלה והתייעצות</span>
            </li>
            <li>
              <CheckCircle className={styles.checkIcon} />
              <span>הקורס משלב תרגול מעשי - גם על מודליסטיות וגם בבית (את תקבלי משימות אחרי כל מפגש ליישום)</span>
            </li>
            <li>
              <CheckCircle className={styles.checkIcon} />
              <span>את מקבלת ערכה שמספיקה לפחות ל10 הלקוחות הראשונות</span>
            </li>
          </ul>
        </section>

        <button onClick={handleWhatsAppClick} className={styles.ctaButton}>
          <Send className={styles.buttonIcon} />
          לפרטים נוספים לחצי כאן
        </button>
      </div>
    </div>
  );
};

export default CourseSyllabus;