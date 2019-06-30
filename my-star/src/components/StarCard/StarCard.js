import React from "react";
import "./StarCard.css";

function StarCard(props) {
    return (
        <div className="card">
            <div className="img-container">
            <img alt={props.image.replace(".jpg", "")} src={require("../../public/images/" + props.image)} />
            </div>
        </div>
    );
}

export default StarCard;