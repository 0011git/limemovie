import React, { useRef, useState } from 'react'
import searchScss from '../styles/Search.module.scss';

const Search = () => {
    const [keyword, setKeyword] = useState('');
    const searchRef = useRef();

    
    const onSearch = (e) => {
        setKeyword(e.target.value);
        if(keyword !== ''){
          searchRef.current.classList.add(searchScss.activeSearch);
        }else{
          searchRef.current.classList.remove(searchScss.activeSearch);
        }
    }

    const onReset = () => {
      setKeyword(''); 
      searchRef.current.classList.remove(searchScss.activeSearch); 
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
    </div>
    </form>
  )
}

export default Search;