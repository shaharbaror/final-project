import styles from "./Header.module.css";

const Header = (props) => {

    //gets the amount of object in the right place

    return <header className={styles.header}>
        {props.children}
    </header>
};

export default Header;