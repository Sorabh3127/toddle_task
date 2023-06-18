import React,{useState} from 'react'
import './YourPageBottom.css'
import { AiOutlinePlus } from "react-icons/ai";
import Modal2 from './Modal2'

const YourPageBottom = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    
      <div className="top-section">
        <p className="left-post">Your Posts</p>

        <div className="right-post">
        <div className="create_container resize" onClick={()=> setOpenModal(true)} >
              <AiOutlinePlus id="plus_icon"/>
              <div className="txt_plus_frwrd" >Create new Post</div>
          </div>
        </div>

      </div>

      <div ><img src="./C2.PNG"  className="mg_not_found" alt="" /></div>

      <Modal2 open={openModal} onClose={()=> setOpenModal(false)}/>
    </>
  )
}

export default YourPageBottom