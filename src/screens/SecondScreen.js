import IconTextComponent from "../components/NewBox/NewBox"
import styles from "./SecondScreen.module.css"
import mom from "../Icons/wired-outline-28-calendar-hover-pinch.json"
import money from "../Icons/wired-outline-414-money-bag-dollar-hover-shake (3).json"
import success from "../Icons/wired-outline-633-female-standing-hover-success (2).json"
import Can from "../components/can/Can"
import climb from "../Icons/wired-outline-1776-staircase-running-hover-running.json"
import nail from "../Icons/wired-outline-1594-manicure-hover-pinch (3).json"
import business from "../Icons/wired-outline-426-brain-hover-pinch.json"
import Button from "../components/button/Button"
const SecondScreen = () => {
    return <>
        <div className={styles.title}>לא הגעת לכאן סתם</div>
        <div className={styles.description}>אם את כאן אני בטוחה שכבר שמעת על תחום הציפורניים ואת יודעת שאת יכולה </div>
        
        <div className={styles.row}>
        <IconTextComponent 
                title="לקום כל בוקר בתחושת הגשמה " 
                description="לקום כל בוקר ולהרגיש שאת נהנת מהעבודה שלך ועדיין מתוגמלת ממנה כראוי בלי להתפשר על החלומות שלך" 
                icon={success}
            />
         
            <IconTextComponent 
                title="להכניס סכומים שרק חלמת עליהם" 
                description="הביקוש לתחום הוא עצום ואת תוכלי להכניס בכל חודש מחדש עשרות אלפי שקלים" 
                icon={money}
            />
            <IconTextComponent 
                title="להחליט בעצמך מתי את עובדת" 
                description="את תוכלי להצליח לעבוד בשעות שתבחרי! בלי בוס על הראש, בלי 9-17 ומשמרות! את תוכלי להחליט כמה לקוחות לקבל ומתי!" 
                icon={mom}
            />
        </div>
        <div className={styles.title}>ולמזלך</div>
        <div className={styles.description}>את גם לא צריכה לבחור בין להיות אמא/בת זוג טובה לבין הקריירה שלך</div>
        <div className={styles.title}>את יכולה לשלב בין שניהם!</div>
        <div className={styles.description}>אבל, חשוב לי להבהיר לך שזה ידרוש ממך</div>
        <div className={styles.row}>
            <Can 
                text="להתמיד גם כשהדברים פחות הולכים לפי איך שאת רוצה ומתכננת"
                icon={climb}
            />
            <Can 
                text="להמשיך לתרגל כל הזמן כדי לשפר את הטכניקה שלך ואת זמני העבודה שלך"
                icon={nail}
            />
            <Can 
                text="להיות מוכנה מנטלית לעובדה שאת עומדת להיות בעלת עסק"
                icon={business}
            />
        </div>
        <Button text="אני רוצה לשמוע עוד פרטים"/>
    </>
}

export default SecondScreen