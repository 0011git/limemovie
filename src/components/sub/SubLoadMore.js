import React from 'react'
import LoadMoreBtn from './LoadMoreBtn'

const SubLoadMore = () => {
  const btnName = '더 많은 콘텐츠 불러오기'
  let page = 1;
  const onLoadMore = () => {
    page++;
    console.log(page);
  }

  return (
    <div onClick={onLoadMore} style={{
        margin:'80px auto 300px',
        textAlign:'center',
        }}>
      <LoadMoreBtn btnName={btnName}/>
    </div>
  )
}

export default SubLoadMore