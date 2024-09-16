import React from 'react'
import {create} from "zustand"
import {persist} from 'zustand/middleware'

const todoStore = (set) => ({
  arr2:[
    {id : 1 ,title : 'Work 1'},
    {id : 2 ,title : 'Work 2'},
  ],
  addArr2 : (newValue)=>set((state)=>({
    arr2: [...state.arr2,{id: Date.now(),title:newValue}]
  })),
  delArr2:(id)=>set((state)=>({
    arr2: state.arr2.filter((item,index)=> item.id !== id)
  })),
})

const usePersist = {
  name : 'gap-store',
  getStorage : () => localStorage,
  partialize:(state)=> ({
      arr: state.arr,
      arr2: state.arr2,
  })
}

const useStore = create(persist(todoStore,usePersist))

export default useStore