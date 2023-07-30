import React from 'react'

const HeaderContentPortion = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center text-p-white '>
          <p className='text-[2.5rem] mb-6 text-center font-semibold'>Nice to meet you! I’m <span className=' border-b-2 border-b-p-green pb-0'>Adam Keyes</span>. </p>
          <p className='text-center text-p-grey mb-6 '>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
          <p className='text-p-white block border-b-2 border-b-p-green pb-2'>CONTACT ME</p>
        </div>
    </>
  )
}

export default HeaderContentPortion