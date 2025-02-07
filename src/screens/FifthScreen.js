import { ChevronDown } from "lucide-react"
import CourseSyllabus from "../components/course/Course"
import styles from "./FifthScreen.module.css"
import Know from "../components/Know/Know"
import check from "../Icons/wired-lineal-2075-fraud-hover-pinch.json"
import IconTextComponent from "../components/NewBox/NewBox"
import Button from "../components/button/Button"
import FAQItem from "../components/questions/Questions"

const FifthScreen = () => {
  return (
    <>
      <div className={styles.title}>אתן שואלות ואני עונה</div>
      <FAQItem 
  question="האם אפשר באמת לשלב בין אימהות לקריירה מצליחה?"
  answer="בהחלט! כאמא בעצמי, אני ההוכחה החיה שאפשר להצליח בשני העולמות. הקורס שלי בנוי במיוחד כדי לאפשר לך שעות עבודה גמישות, יכולת לעבוד מהבית, והכנסה מכובדת - בלי להתפשר על הזמן עם הילדים."
/>

<FAQItem 
  question="כמה זמן לוקח להחזיר את ההשקעה?"
  answer="תוך זמן קצר מאוד מסיום הקורס והתחלת העבודה בתחום, את יכולה להחזיר את ההשקעה. את לא חייבת לעזוב את העבודה הנוכחית שלך מיד - אפשר להתחיל בהדרגה עם כמה לקוחות ולצבור ביטחון ותאוצה."
/>

<FAQItem 
  question="מה קורה אם אני צריכה עזרה נוספת אחרי השיעור?"
  answer="אני משריינת זמן נוסף במיוחד בשבילך למקרה שתצטרכי חידודים. בנוסף, תקבלי חוברת דיגיטלית מקיפה שכוללת את כל החומר העיוני והמעשי, כולל טיפים לניהול העסק!"
/>

<FAQItem 
  question="איך אני יכולה להיות בטוחה שאצליח?"
  answer="תחום הציפורניים תמיד בשיאו! גם בקורונה הוא לא נפגע וזה אומר שהביקוש לעולם לא ייפסק, מה שיגרום לך להצליח יהיה אך ורק את - ההתמדה שלך, התרגול שלך והרעב שלך להצליח"
/>

<FAQItem 
  question="איך הקורס שלך שונה מקורסים אחרים?"
  answer="הקורס שלי מציע חוויית לימוד אישית - אחת על אחת. אני שמה דגש מיוחד על הליווי המנטלי במעבר משכירה לעצמאית, מלמדת אותך לא רק את המקצוע אלא גם איך לנהל עסק מצליח. את מקבלת ערכה מקצועית, תרגול מעשי נרחב, וליווי צמוד לאורך כל הדרך."
/>

<FAQItem 
  question="איפה מתקיימים הקורסים?"
  answer="הקורסים מתקיימים בסטודיו שלי באור עקיבא, בסביבה מקצועית ונעימה. המיקום נבחר בקפידה כדי להיות נגיש ונוח."
/>

<FAQItem 
  question="מה עושים כשיש ילדים קטנים בבית?"
  answer="שאלה מצוינת ! יש אפשרות לתרגול בבית, והתוכנית בנויה כך שתוכלי לשלב בין הלימודים למשפחה ולעבודה. אני מאמינה שאת לא צריכה לוותר על החלומות שלך בגלל שאת אמא - להפך, זו בדיוק הסיבה להגשים אותם!"
/>

<FAQItem 
  question="אני מפחדת לעזוב עבודה קבועה ולהתחיל מ-0 במקום חדש"
  answer="החשש שלך לגמרי מובן! גם אני עבדתי שנים בעבודה קבועה בחברת אשראי למשך תקופה ארוכה. את לא חייבת לעזוב את העבודה הקבועה מיד - אפשר להתחיל בקטן, לבנות את העסק בהדרגה, ולעבור כשתרגישי מוכנה. הבוגרות שלי התחילו בדיוק ככה, וכיום הן מרוויחות יותר ממה שהרוויחו כשכירות."
/>

     <Button text="איזבלה, בואי נדבר!"/>
    </>
  )
}

export default FifthScreen