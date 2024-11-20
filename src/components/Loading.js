import React from 'react'
import loadingStyle from '../styles/loading.module.scss'

const Loading = () => {
    /* HTML: <div class="loader"></div> */
  return (
    <div className={loadingStyle.loaderWrap}>
        <div className={loadingStyle.loader}></div>
        <p className={loadingStyle.text}>Juicing </p>
    </div>
  )
}

export default Loading