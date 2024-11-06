import React, { useState } from 'react'

const GenreBtn = ({name, isActive}) => {

  return (
    <button 
      style={{
        minHeight:'30px',
        padding:'4px 16px',
        color: isActive ? '#0C0B0E' : '#fafafa', 
        backgroundColor: isActive ? '#fafafa' : '#0C0B0E',
        fontWeight: isActive ? '700' : '400',
        fontSize:'14px',
        border:'1px solid #fafafa', 
        borderRadius:'8px'}}
      // onClick={btnToggle}
      >
        {name}
    </button>

  )
}

export default GenreBtn