import React from "react";
import { ReactDOM } from "react";


export default function Card(props) {

    return (
        <div className="card">
            <a className="img--container">
                <img src={props.imageUrl} className="card--img"/>
            </a>
            <div className="card--stats">
                <div>
                    <img src="../images/Path.png" />
                    <h1>{props.location}</h1>
                    <h1 src={props.googleMapsUrl}>View on Google Maps</h1>
                </div>
                <h1>{props.title}</h1>
                <h1>{props.startDate}-{props.endDate}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )




}