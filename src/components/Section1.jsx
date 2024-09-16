import React from 'react'

const Section1 = () => {
  return (
    <div className='flex flex-row justify-between text-4xl'>
        <h1>Navbar</h1>
        <div className='text-2xl'>
            <button>Home</button>
            <button>About</button>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Section1