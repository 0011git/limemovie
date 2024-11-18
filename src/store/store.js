//store에는 요청으로 받은 데이터를 저장, api에서는 요청
import { create } from 'zustand';
import React from 'react'
import { apiMain, apiSub01, apiSub02, apiSub03, apiDetails, apiSearchResult } from '../api/instance';
         //instance에 저장

const store = create((set)=>({
    loading: true,

    mainData: {},
    apiMain: async () => {
        await fetchData(apiMain, 'mainData', set)
    },

//     sub01Data: {},
//     apiSub01: async () => {
//          await fetchData(apiSub01, 'sub01Data', set)
//     },

//     sub02Data: {},
//     apiSub02: async () => {
//          await fetchData(apiSub02, 'sub02Data', set)
//     },

//     sub03Data: {},
//     apiSub03: async () => {
//          await fetchData(apiSub03, 'sub03Data', set)
//     },

    detailsData: {},
    apiDetails: async () => {
         await fetchData(apiDetails, 'detailsData', set)
    },

//     searchResultData: {},
//     apiSearchResult: async () => {
//          await fetchData(apiSearchResult, 'searchResultData', set)
//     }
}))

async function fetchData (instance, storedData, set) {
   set({loading:true})
   let res = await instance();
   
   set(() => {
      let data = {};
      for(let key in res){
         data[key] = res[key];
      }
      return { [storedData]: data, loading: false }
   })
}



export default store