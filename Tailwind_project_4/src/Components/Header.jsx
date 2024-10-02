import React from 'react'

const Header = () => {
  return (
    <div className=''>
      <div className='px-1 mx-auto sm:px-4 lg:px-8 max-w-screen-2xl'>
        <div className='flex item-center justify-between gap-6'>
          <img src='./public/images/logo.svg' className='h-10'></img>
          <button className='bg-green-950 text-white rounded-3xl px-4 py-2 text-sm font-extrabold font-lato'>Join Community</button>
        </div>
      </div>
    </div>
  )
}

export default Header