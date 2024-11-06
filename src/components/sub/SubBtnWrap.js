import React, { useState } from 'react'
import GenreBtn from '../GenreBtn'


const SubBtnWrap = ({btnNameArr, isActive}) => {
  // const isActiceInitialArr = Array(btnNameArr.length).fill(false);
  // const [isActive, setIsActive] = useState(isActiceInitialArr);
  // console.log(isActive);

  // const chooseGenres = (e) => {
  //   let state = [...isActive]
  //   switch(e.target.innerText){
  //     case btnNameArr[0]:
  //       state = state.map((item) => item = false)
  //       state[0] = true;
  //       setIsActive([...state])
  //       break;
  //     case btnNameArr[1]:
  //       state = state.map((item) => item = false)
  //       state[1] = true;
  //       setIsActive([...state])
  //       break;
  //   }
  // }

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