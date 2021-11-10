import React from 'react'
import '../css/popup.css'
import {FaTimes} from 'react-icons/fa'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><FaTimes /></button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup