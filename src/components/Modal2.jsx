import React from 'react'
import './Modal.css'
import { RxCross1 } from "react-icons/rx";
import {Link} from "react-router-dom";

const Modal2 = ({open, onClose}) => {
    if(!open) return null;
  return (
    <>
    <div className='container_upload'>
        <div className='wrapper_upload modal2_create_board'>
            <div className="upper add_custom_margin_bottom">
                <div>
                <h2 className='h2_remake'>Create a post</h2>
                <p>Write something for your post</p>
                </div>
            
            <RxCross1 className='close' onClick={onClose}/>
            </div>
            
            <h4>Subject</h4>
            <input type='text' placeholder='Places around the world' className='places_name' />

            <input type="file" name="" id="" />
            <h2 className='upload_h2'>What’s on your mind? </h2>
            <input type='textbox' placeholder='Type here' className='places_name' />
           
            <button className='create_board custom' height='45px'> Publish </button>
        </div>
    </div>
    </>
    
    
  )
}

export default Modal2

// onClick={onClose}