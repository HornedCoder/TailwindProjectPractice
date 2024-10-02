import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <img src='./images/logo.svg' className='h-10'>
        </img>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-10'>
        <img src='./images/icon-twitter.svg' className='grayscale'>
        </img>
        <img src='./images/icon-linkedin.svg' className='grayscale'>
        </img>
        <img src='./images/icon-instagram.svg' className='grayscale'>
        </img>
        <img src='./images/icon-youtube.svg' className='grayscale'>
        </img>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-6 mt-10 mb-16 text-neutral-400 font-sans font-medium'>
        <h>
          2023 DSA Revision
        </h>
      </div>
    </div>
  )
}

export default Footer