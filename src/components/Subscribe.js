import React, { useRef, useState } from 'react'
import subscribeScss from '../assets.scss/Subscribe.module.scss'

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const onEmail = (e) => {
    setEmail(e.target.value)
    if(email !== ''){
      emailRef.current.classList.add(subscribeScss.activeSubscribe);
    }else{
      emailRef.current.classList.remove(subscribeScss.activeSubscribe);
    }
  }


  const onReset = () => {
    setEmail(''); 
    emailRef.current.classList.remove(subscribeScss.activeSubscribe);
  }
  return (
    <form>
      <div ref={emailRef} className={subscribeScss.subscribe}>
        <div className={subscribeScss.inputWrap}>
          <label htmlFor='email'></label>
          <input value={email} onChange={onEmail} type='email' id='email' placeholder='movie@limemovie.com'/>
          <button onClick={onReset} className={subscribeScss.reset}></button>
        </div>
        <button>구독하기</button>
      </div>
    </form>
  )
}

export default Subscribe