//store에는 요청으로 받은 데이터를 저장, api에서는 요청
import { create } from 'zustand';
import React from 'react'
import { apiMain, apiSub01, apiSub02, apiSub03, apiDetails, apiSearchResult } from '../api/instance';
         //instance에 저장

const store = create((set)=>({
    loading: true,
    setLoading: (value) => set({ loading: value }),

    mainData: {},
    apiMain: async () => {
        await fetchData(apiMain, 'mainData', set, 1)
    },

    sub01Data: {nowPlaying:[], releaseThisWeek:[] },
    apiSub01: async (page) => {
        set( { loading:true } )
        let res = await apiSub01(page);
        console.log(res);
        set((previous) => {
            let data = {};
            for(let key in res){
                data[key] = res[key];
            }
            
            let nowPlayingNewData = data.nowPlaying.data.results
            let releaseThisWeekNewData = data.releaseThisWeek.data.results

            previous.sub01Data.nowPlaying.push(...nowPlayingNewData)
            previous.sub01Data.releaseThisWeek.push(...releaseThisWeekNewData)

            return { loading: false }
        })
    },

    sub02Data: {trending:[]},
    apiSub02: async (page) => {
          set( { loading:true } )
        let res = await apiSub02(page);
        
        set((previous) => {
            let data = {};
            for(let key in res){
                data[key] = res[key];
            }

            let trendingNewData = data.trending.data.results

            previous.sub02Data.trending.push(...trendingNewData)
            
            return { loading: false }
        })
    },

    sub03Data: {},
    apiSub03: async (page) => {
         await fetchData(apiSub03, 'sub03Data', set)
    },

    detailsData: {},
    apiDetails: async () => {
         await fetchData(apiDetails, 'detailsData', set)
    },

    searchResultData: {},
    apiSearchResult: async (page) => {
         await fetchData(apiSearchResult, 'searchResultData', set)
    }
}))

async function fetchData (instance, storedData, set) {
   set({loading: true})
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