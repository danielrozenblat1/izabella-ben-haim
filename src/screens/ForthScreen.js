import { ChevronDown } from "lucide-react"
import CourseSyllabus from "../components/course/Course"
import styles from "./ForthScreen.module.css"
import Know from "../components/Know/Know"
import dreams from "../Icons/wired-lineal-283-avatar-female-cross-hover-pinch.json"
import place from "../Icons/wired-lineal-1468-morale-hover-pinch.json"
import magic from "../Icons/wired-lineal-1069-lullaby-music-hover-pinch.json"
import IconTextComponent from "../components/NewBox/NewBox"
import Button from "../components/button/Button"

const ForthScreen = () => {
  return (
    <>
      <div className={styles.title}>עם יד על הלב, כמה פעמים הרגשת ש</div>
      <div className={styles.row}>
        <Know 
          title="את מפספסת רגעים קסומים"
          description="לפעמים העבודה גוזלת ממך יותר מדי ובאה על חשבון המשפחה ועל חשבון רגעים שלא יחזרו"
          icon={magic}
        />
        <Know 
          title="את לא נמצאת במקום הנכון"
          description="אמנם המשכורת קבועה ואת נמצאת במקום שנוח לך בו אבל עדיין משהו מרגיש לך מפוספס ואת יודעת שאין לך יותר מדי לאן להתקדם"
          icon={place}
        />
    <Know 
 title="את מוותרת על החלומות שלך"
 description="את יודעת שיש בך פוטנציאל להרבה יותר, אבל הפחד והחשש מלעשות שינוי מונעים ממך לעשות צעד"
 icon={dreams}
/>
      </div>
      <div className={styles.description}>הייתי בדיוק במקום שלך עד לפני 3 שנים והרגשתי בדיוק את אותו הדבר!</div>
      <div className={styles.description}>היום אני מנהלת את עצמי, שולטת בזמן שלי, בכמות העבודה שלי ונהנת מכל יום שעובר</div>
      <div className={styles.description}>השינוי שלי הגיע כי הרגשתי מוצפת והגעתי לנקודת שבירה</div>
      <div className={styles.title}>זה לא חייב להיות המקרה אצלך</div>
<Button text="לחצי כאן ונדבר"/>
    </>
  )
}

export default ForthScreen