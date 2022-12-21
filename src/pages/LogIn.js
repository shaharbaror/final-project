import React,{ useState } from "react";
import Login from "../components/Login/Login";
import Loginv2 from "../components/Login/Loginv2";
import Header from "../components/Header/Header";


const LogIn = () => {

    const [isCode, setIsCode] = useState(true);

    const ChangeScreen = () => {
        setIsCode(true);
    }

    

    return <React.Fragment>
        <Header path = {'/login'} />
        { isCode? <Loginv2/>: <Login ChangeScreen = {ChangeScreen}/>}
    </React.Fragment>
};

export default LogIn;