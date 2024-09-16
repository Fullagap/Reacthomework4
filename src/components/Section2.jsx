import React, { useState } from 'react'
import useStore from '../todoStore/todoStore'

const Section2 = () => {
    const [txt,setTxt] = useState("")

    const {arr2 , addArr2,delArr2} = useStore((state)=>({
        arr2 : state.arr2,
        addArr2 : state.addArr2,
        delArr2 : state.delArr2
    }))

    const handleOnChange = (e) => {
        setTxt(e.target.value)
    }

    const handleClickAdd = () => {
        console.log(txt)
        addArr2(txt)
    }

    const handleClickDel = (index) => {
        console.log(index)

        delArr2(index)
    }
 
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Section2</h2>
            <div className="flex items-center mb-4">
                <input type="text" 
                    value={txt} 
                    onChange={handleOnChange} 
                    placeholder="Enter item title"
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button onClick={handleClickAdd} 
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Add
                </button>
            </div>
            <ul className="list-disc pl-5">
                {arr2.map((item, index) => (
                    <li key={index} 
                        className="flex items-center justify-between py-2 border-b border-gray-200">
                        <span>{item.title}</span>
                        <button onClick={() => handleClickDel(item.id)}
                            className="px-2 py-1 bg-pink-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Section2