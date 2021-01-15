import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import "../App.scss";

function Controls(props) {
    return (
        <div className="controls">
            <div className="skip" onClick={() => props.SkipSong(false)} >
                <FontAwesomeIcon icon={faBackward}/>
            </div>
            <div className="play" onClick={() => props.setIsPlaying(!props.isPlaying)} >
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </div>
            <div className="skip" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </div>
        </div>
    )
}
export default Controls
