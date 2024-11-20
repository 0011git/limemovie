import { create } from 'zustand';

const store = create((set)=>({
    loading: true,
    setLoading: (value) => set({ loading: value })
}))




export default store