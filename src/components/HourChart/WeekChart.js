import DayChart from "./DayChart";
import styles from "./WeekChart.module.css";

const WeekChart = () => {

    return <div className={styles.table}>
        <DayChart day={0}>Sunday</DayChart>
        <DayChart day={1}>Monday</DayChart>
        <DayChart day={2}>Tuesday</DayChart>
        <DayChart day={3}>Wednesday</DayChart>
        <DayChart day={4}>Thursday</DayChart>
    </div>
};

export default WeekChart;