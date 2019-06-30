import React from "react";
import "./StarCard.css";


const StarCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={require("../images/" + props.image)} />
        {/* <img alt={props.name} src={require("../images/" + props.image)} /> */}
        </div>
    </div>
);


export default StarCard;