import React from 'react';
import { CheckCircle } from 'lucide-react';
import styles from './Bonus.module.css';

const EmphasisSection = () => {
  const steps = [
    {
      title: "הקורס הוא אישי",
      description: "הקורס הוא אחת על אחת ויהיה לך את כל הזמן שבעולם לשאול שאלות ואת כל היחס שתצטרכי ממני"
    },
    {
      title: "בקורס יש דגש גם על הפן המנטלי",
      description: "אני עוברת איתך בקורס גם על הפן המנטלי בלהיות עצמאית"
    },
    {
      title: "את תקבלי תמיכה גם אחרי הקורס",
      description: "אני זמינה לך גם אחרי הקורס לכל שאלה, התייעצות וחשש שיש לך"
    },
    {
      title: "את עומדת לתרגל כבר בקורס!",
      description: "הקורס משלב תרגול מעשי - גם על מודליסטיות וגם בבית (את תקבלי משימות אחרי כל מפגש ליישום)"
    },
    {
      title: "הקורס כולל ערכה",
      description: "את מקבלת ערכה שמספיקה לפחות ל10 הלקוחות הראשונות"
    }
  ];

  const ProcessStep = ({ number, title, description }) => {
    const formattedNumber = number.toString().padStart(2, '0');
    
    return (
      <div className={styles.stepContainer} data-number={formattedNumber}>
        <div className={styles.content}>

          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    );
  };

  return <>
<div className={styles.header}>חשוב לי להדגיש</div>
    <div className={styles.container}>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            number={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
    </>
};

export default EmphasisSection;