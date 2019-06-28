import React from "react";
//import "../styles/Header.css"; 

const styles = {
    header: {
        background: "blue"
    },

    head: {
        margin: 0,
        paddingTop: 75,
        textAlign: "center",
        color: "white",
        fontSize: 100
    }
}

const Header = () => (
    <header className="header" style={styles.header}>
        <h1 style={styles.head}>Welcome</h1>
    </header>
);

export default Header;