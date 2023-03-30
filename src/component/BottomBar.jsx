import React from 'react'
import './BottomBar.css';
// import { FaMapMarkedAlt } from "react-icons/fa";
// import { BsFillChatSquareDotsFill } from "react-icons/bs";
// import { FaUser } from "react-icons/fa";


const BottomBar = () => {
  return (
    <div className='BottomBar-wrapper'>
      <div className='BottomBar-container'>
        <div className='BottomBar-icon-box'>
          <button className='BottomBar-icon-map' type='button'>a</button>
        </div>
        <div className='BottomBar-icon-box'>
          <button className='BottomBar-icon-community' type='button'>b<span className='BottomBar-icon-community-span1'>커뮤니티</span><span className='BottomBar-icon-community-span2'>채팅하기</span></button>
        </div>
        <div className='BottomBar-icon-box'>
          <button className='BottomBar-icon-mypage' type='button'>c</button>
        </div>
      </div>
    </div>
  )
}

export default BottomBar