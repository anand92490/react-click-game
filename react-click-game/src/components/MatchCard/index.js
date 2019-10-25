import React from "react";
import "./style.css";

function MatchCard(props){
    return(
        
        <div onCllick={() => props.setClicked(props.id)} className="card col-md-3">
            <div className="img-container">
                <img alt={props.name} src={props.imgage}/>
            </div>
        </div>
    );
}

export default MatchCard;