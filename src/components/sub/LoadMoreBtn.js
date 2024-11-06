import React, { useState } from 'react'

const LoadMoreBtn = ({btnName}) => {
  const [isActive, setIsActive] = useState(false);
  const btnToggle = (e) => {
    setIsActive(true);
    setTimeout(() => {
        setIsActive(false);
    }, 120)
  }

 

  return (
    <button
      style={{
        padding:'4px 36px',
        color: isActive ? '#0C0B0E' : '#fafafa', 
        backgroundColor: isActive ? '#fafafa' : '#0C0B0E',
        fontSize:'14px',
        fontWeight: isActive ? '700' : '400',
        border:'1px solid #fafafa', 
        borderRadius:'8px'}}
    //   onClick={btnToggle}
      onMouseUp={() => setIsActive(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      >
        {btnName}
    </button>
  )
}

export default LoadMoreBtn