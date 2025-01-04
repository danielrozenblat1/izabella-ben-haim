import IconTextComponent from "../components/NewBox/NewBox"
import styles from "./SecondScreen.module.css"
import mom from "../Icons/wired-lineal-402-legal-balance-legal-hover-pinch.json"
import money from "../Icons/wired-lineal-2075-fraud-hover-pinch.json"
import success from "../Icons/wired-lineal-633-female-standing-morph-success.json"
import Can from "../components/can/Can"
import loot from "../Icons/wired-lineal-298-coins-hover-jump (1).json"
import family from "../Icons/wired-lineal-1529-parenting-parents-family-hover-pinch (1).json"
import business from "../Icons/wired-lineal-947-investment-hover-pinch.json"
const SecondScreen = () => {
    return <>
        {/* <div className={styles.title}>מזל טוב! את אמא</div> */}
        <div className={styles.description}>אני מבינה בדיוק את האתגרים והחלומות שלך</div>
        
        <div className={styles.row}>
        <IconTextComponent 
                title="הגשמה אישית" 
                description="לקום כל בוקר ולהרגיש שאת נהנת מהעבודה שלך ועדיין מתוגמלת ממנה כראוי בלי להתפשר על החלומות שלך" 
                icon={success}
            />
         
            <IconTextComponent 
                title="לדאוג לביטחון כלכלי" 
                description="להתפרנס בכבוד ולדעת שאת יכולה לתת למשפחה שלך את כל מה שהיא צריכה" 
                icon={money}
            />
            <IconTextComponent 
                title="איזון בין עבודה לחיים האישיים" 
                description="להצליח לעבוד ועדיין לאזן ולשלב את החיים האישיים שלך - חיי המשפחה, חיי חברה ואפילו - זמן לעצמך" 
                icon={mom}
            />
        </div>
        <div className={styles.title}>אבל למזלך</div>
        <div className={styles.description}>את לא צריכה לבחור בין להיות אמא טובה לבין להצליח בקריירה</div>
        <div className={styles.title}>את יכולה לשלב בין שניהם!</div>
        <div className={styles.description}>ולהתחיל</div>
        <div className={styles.row}>
            <Can 
                text="להרוויח כבר מההתחלה הכנסה משמעותית שתאפשר לך להתפרנס בכבוד"
                icon={loot}
            />
            <Can 
                text="לקבוע את שעות העבודה שלך בהתאם לצרכי המשפחה ולהיות נוכחת בחיי הילדים"
                icon={family}
            />
            <Can 
                text="לבנות עסק משגשג (גם מהבית) ולהגשים את החלומות שלך בדרך שלך"
                icon={business}
            />
        </div>
    </>
}

export default SecondScreen