import React from 'react';
import "../App.scss";

export default function Details(props) {
    return (
        <div>
            <h3 className="title">{props.song.title}</h3>
        </div>
    )
}
