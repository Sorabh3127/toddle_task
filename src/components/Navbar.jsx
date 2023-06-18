import React,{useState} from 'react'
import './Navbar.css'
import {FaSearch} from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal.jsx";



const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
  return (<>
<div className="header">
    <div className="container">

      <div className="brand">
          <div className="logo_icon"><img src="./Capture.png" alt="" /></div>
          <div className="logo_name">toddle</div>
      </div>


      <div className="second">
          <div className="search">
              <FaSearch color='rgba(113, 113, 113, 1)'/>
              <input  placeholder="Search..." type="text" />
          </div>

          <div className="create_container" onClick={()=> setOpenModal(true)} >
              <AiOutlinePlus id="plus_icon"/>
              <div className="txt_plus_frwrd">Create new Board</div>
          </div>
      </div>

    </div>
    
</div>
        <Modal open={openModal} onClose={()=> setOpenModal(false)}/>
   
   </>
    
  )
}

export default Navbar
