import { create } from "zustand";

export const useStore = create((set) => ({
  bannerData: [],
  imageURL: "",
  setBannerData:(payload)=>{
    set((state)=>({...state,bannerData:payload}))
  },
  setImageURL:(payload)=>{
    set((state)=>({...state,imageURL:payload}))
  }
}));
