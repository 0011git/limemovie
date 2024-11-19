import React from 'react'
import GenreBtn from '../GenreBtn'


const SubBtnWrap = ({btnNameArr, isActive}) => {

  return (
    <div>
        <ul style={{margin:'40px 0', display:'flex', flexWrap:'wrap'}}>
            {btnNameArr.map((name, idx) => (
              <li key={name} style={{margin:'0 12px 12px 0'}}>
                  <GenreBtn name={name} isActive={isActive[idx]} />
              </li>
            ))}
        </ul>
    </div>
  )
}

export default SubBtnWrap