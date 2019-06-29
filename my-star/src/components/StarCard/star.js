import React from "react";
import "./star.css";

function StarCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    );
}

export default StarCard;