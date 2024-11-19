import React from 'react'
import loadMoreBtnStyle from '../../styles/loadMoreBtn.module.scss'

const LoadMoreBtn = ({page, setPage}) => {

  return (
    <div onClick={() => {setPage(page + 1); console.log(page);}} className={loadMoreBtnStyle.loadMoreBtnWrap}>
      <button>더 많은 콘텐츠 불러오기</button>
    </div>
  )
}

export default LoadMoreBtn