import React from "react";
//import "../styles/Navbar.css"; 

const styles = {
    navbar: {
        background: "green",
        height: 60
    },   
        welcome: {
        color: "white",
        margin: 5,
        float: "right"
    }
}

const Navbar = () => (
    <nav className="navbar" style={styles.navbar}>
        <a style={styles.welcome} href="/">Welcome</a>
    </nav>
);

export default Navbar;