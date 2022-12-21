import React, { useState } from "react";
import styles from './Login.module.css';

const Login = (props) => {
    const [email, setEmail] = useState('');

    const OnChangeEmail = (element) => {
        console.log(element.target.value);
        setEmail(element.target.value);
    }

    const Submitmail = () => {
        if(email.includes('@')){
            // Contact the node server to send an email with a code
            props.ChangeScreen();
        } else {
           // show up red and say the problem
        }
    };

    return <div className={styles.card}>
        <div className={styles['email-div']}>
            <label> Enter Email: </label>
            <input onChange={OnChangeEmail} type="email" className={styles.email} />
        </div>
        <button onClick={Submitmail} className={styles['submit-btn']}>Send email</button>
    </div>
};

export default Login;
