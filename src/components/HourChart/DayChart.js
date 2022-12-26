import styles from './DayChart.module.css'
import { useSelector } from 'react-redux';

const DayChart = (props) => {
    const counters = useSelector((state) => state.counter.days[props.day]);
    const highestNum = 43200;
    const present = (counters/highestNum)*100;
    

    return <div className={styles.yes}>
        <div className={styles['day-chart']}>
            <div style={{height: `${100 - present}%`}}></div>
            <div className={styles['fill-chart']} style={{height: `${present}%`, width: `${present<10 ? present*10: 100}%`}}></div> {/*can add coloir*/}
        </div>
        <h3>{props.children}</h3>
    </div>
};

export default DayChart;