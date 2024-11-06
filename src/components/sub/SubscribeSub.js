import React from 'react'
import subssScss from '../../assets.scss/SubscribeSub.module.scss'

const SubscribeSub = () => {
 

  return (
    <div className={subssScss.subscribe}>
        <form>
            <label htmlFor='email'>
                <input type='email' id='email' placeholder='movie@limemovie.com'/>
                <button>구독하기</button>
            </label>
        </form>
    </div>
  )
}

export default SubscribeSub