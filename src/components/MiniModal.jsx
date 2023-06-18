import React from 'react'
import { FiEdit3 } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import './MiniModal.css';

const MiniModal = ({open, ele, onClose}) => {
    if(!open) return null;

    function myfun(){
        
        ele.parentNode.removeChild(ele);
        onClose(true);

    }
    return (

        <>
            <div className="mini_box" id="done">
                <div className="top_1" onClick={onClose}><FiEdit3 /> Edit</div>
                <div className="top_2" id='tp' onClick={myfun}><RiDeleteBin6Line />Delete</div>
            </div>
        </>

    )
}

export default MiniModal

