import { ChevronDown } from "lucide-react"
import CourseSyllabus from "../components/course/Course"
import styles from "./ThirdScreen.module.css"

const ThirdScreen=()=>{


return <>
        <div className={styles.title}>איזבלה, איך הקסם קורה?</div>
        <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} strokeWidth={1} />
      </div>
        <CourseSyllabus/>
</>


}
export default ThirdScreen