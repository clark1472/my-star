import React from "react";
//import "../styles/Section.css";

const styles = {
    section: {
        background: "brown",
        padding: 20
    },

    h2: {
        textAlign: "center"
    }
}

const Section = () => (
    <section style={styles.section}className="section">
        <h2 style={styles.h2}>Lorem Ipsum is simply dummy text</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.   
        </p>
    </section>
);

export default Section;