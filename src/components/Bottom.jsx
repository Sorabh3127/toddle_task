import React,{useState} from 'react'
import './Bottom.css'
import {RxDotsVertical} from "react-icons/rx"
import MiniModal from "./MiniModal"

const Bottom = () => {
  const [openModal, setOpenModal] = useState(false);
  var elem = document.getElementById("bx");
 
  return (
    <>
        <h2 className="heading">My Boards</h2>
        <div className="containers">
          <div className="block_1">
            <div className="structure">
              <div className="first_part_1"></div>
              <div className="second_part_1">Earth Changes and Journeys</div>
              <RxDotsVertical className='icon_set'/>
            </div>
          </div>
          <div className="block_2">
          <div className="block_1">
            <div className="structure" id="bx">
              <div className="first_part_2"></div>
              <div className="second_part_2">Eating Right</div>
              <RxDotsVertical className='icon_set' onClick={()=> setOpenModal(true)}/>
            </div>
          </div>
          </div>
        </div>

        <MiniModal open={openModal} ele={elem} onClose={()=> setOpenModal(false)}/>
    </>
    
  )
}

export default Bottom