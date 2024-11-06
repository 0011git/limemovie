import React, { useRef, useState } from 'react'
import searchScss from '../assets.scss/Search.module.scss';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    // const [on, setOn] = useState(false); //실시간 검색 삭제
    const searchRef = useRef();
    // const resultRef = useRef();

    
    const onSearch = (e) => {
        setKeyword(e.target.value);
        if(keyword !== ''){
          // setOn(true)
          searchRef.current.classList.add(searchScss.activeSearch);
          // resultRef.current.classList.add(searchScss.activeResult);
        }else{
          // setOn(false)
          searchRef.current.classList.remove(searchScss.activeSearch);
          // resultRef.current.classList.remove(searchScss.activeResult);
        }
    }
    // console.log(keyword);

    const onReset = () => {
      setKeyword(''); 
      searchRef.current.classList.remove(searchScss.activeSearch); 
      // resultRef.current.classList.remove(searchScss.activeResult);
    }

    const searchKeyword = () => {
      
    }


  return (
    <form onSubmit={searchKeyword}>
    <div className={searchScss.searchWrap}>
      <div ref={searchRef} className={searchScss.search}>
        <input value={keyword} id='search' onChange={onSearch} type='text' placeholder='검색...' />
        <label htmlFor='search'></label>
        <button onClick={onReset} className={searchScss.reset}></button>
      </div>
      {/* <div ref={resultRef} className={searchScss.result}>
        <figure>
          <div>
            <img />
          </div>
          <figcaption>
            <h4>
              {input}
            </h4>
            <p>
              2024
            </p>
          </figcaption>
        </figure>
        <figure>
          <div>
            <img />
          </div>
          <figcaption>
            <h4>
              {input}
            </h4>
            <p>
              2024
            </p>
          </figcaption>
        </figure>
        <figure>
          <div>
            <img />
          </div>
          <figcaption>
            <h4>
              {input}
            </h4>
            <p>
              2024
            </p>
          </figcaption>
        </figure>
      </div> */}
    </div>
    </form>
  )
}

export default Search;