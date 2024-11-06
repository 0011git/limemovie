import React, { useState } from 'react'

const ViewMoreBtn = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <button 
        style={{
            color:'#fafafa',
            // fontSize: '14px',
            textDecoration: isHovered ? 'underline' : 'none',
            textTransform: 'uppercase'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        더보기
    </button>
  )
}

export default ViewMoreBtn