import React from "react";
// import { ReactDOM } from "react";
import PathLogo from "/src/images/path-logo.svg"

export default function Card(props) {

    return (
        <div className="card">
            <a className="img--container">
                <img src={props.imageUrl} className="card--img"/>
            </a>
            <div className="card--stats">
                <div className="first-line-stats">
                    <img src={PathLogo} className="path--img"/>
                    <h1 className="location">{props.location.toUpperCase()}</h1>
                    <a href={props.googleMapsUrl}><h1 className="link--map">View on Google Maps</h1></a>
                </div>
                <h1 className="spot--name">{props.title}</h1>
                <h1 className="date--visit">{props.startDate} - {props.endDate}</h1>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )




}