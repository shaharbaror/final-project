import React from "react";
import styles from './Login.module.css';

const Loginv2 = (props) => {


    //This One Can Be Used with the code of wordle

    return (
    <div className={styles.card}>
        <div className={styles['code-div']}>
            <input className={styles['code-input']} />
            <input className={styles['code-input']} />
            <input className={styles['code-input']} />
            <input className={styles['code-input']} />
        </div>
    </div>
    );

};

export default Loginv2;