import React from 'react'
import  './YourPost_page.css';
import { MdArrowBackIosNew } from "react-icons/md";
import {FaSearch} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
import YourPageBottom from './YourPageBottom'
import {Link} from "react-router-dom";



const YourPost_page = () => {

  
  return (
    <>
        <div className="header2">
          <div className="left">
                  <div className="arrow"><MdArrowBackIosNew/></div>
                  <Link to="/"><img src="./Capture.png" alt="" /></Link>
                  <p>Places around the world</p>
          </div>

          <div className="right">
                <div className="search_icon"><FaSearch className='iconColor'/></div>
                <div className="mid">|</div>
                <div className="bookmark_icon"><BsBookmark className='iconColor'/></div>
          </div>

        </div>

        <YourPageBottom />

        

    </>
  )
}

export default YourPost_page