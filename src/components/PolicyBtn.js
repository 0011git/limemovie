import React from 'react'

const PolicyBtn = () => {
  return (
    <div>
        <ul style={{height:'24px', display:'flex', justifyContent:'center'}}>
            <li style={{marginRight:'24px', color:'#454545'}}>
                <a href='#' style={{textDecoration:'underline'}}>About</a>
            </li>
            <li style={{marginRight:'24px', color:'#454545'}}>
                <a href='#' style={{textDecoration:'underline'}}>Privacy & Terms</a>
            </li>
            <li style={{color:'#454545'}}>
                <a href='#' style={{textDecoration:'underline'}}>Policy</a>
            </li>
        </ul>
    </div>
  )
}

export default PolicyBtn