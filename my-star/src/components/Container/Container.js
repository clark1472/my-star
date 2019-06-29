import React from "react";
import "./Container.css";
//import data from "../../star.json";



const Container = props => (
    <div className="card">
        <div className="img-container">
            <img src={props.image} alt={props.name} />
        </div>
    </div>
);

export default Container;

