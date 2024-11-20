import React from 'react'
import topBtnStyle from '../../styles/topBtn.module.scss'
const TopBtn = () => {

  return (
    <div className={topBtnStyle.topBtnWrap} onClick={() => window.scrollTo({top:0, behavior: 'smooth'})}>
        <button></button>
    </div>
  )
}

export default TopBtn