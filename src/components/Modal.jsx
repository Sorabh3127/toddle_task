import React from 'react'
import './Modal.css'
import { RxCross1 } from "react-icons/rx";
import {Link} from "react-router-dom";

const Modal = ({open, onClose}) => {
    if(!open) return null;
  return (
    <>
    <div className='container_upload'>
        <div className='wrapper_upload'>
            <div className="upper">
            <h2 className='h2_remake'>Add a name for your brand</h2>
            <RxCross1 className='close' onClick={onClose}/>
            </div>
            
            <input type='text' placeholder='Places around the world' className='places_name' />
            <h2 className='upload_h2'>Select Post Colour</h2>
            <p className='upload_p'>Here are some templates to help you get started</p>
            <div className='colours'>
              <button className='btn1 btn_sizes' ></button>
              <button className='btn2 btn_sizes' ></button>
              <button className='btn3 btn_sizes' ></button>
              <button className='btn4 btn_sizes' ></button>
            </div>
           
            <button className='create_board'> <Link to="/yourPost">Create board</Link> </button>
        </div>
    </div>
    </>
    
    
  )
}

export default Modal

// onClick={onClose}