import React from 'react'

const HeaderContentPortion = () => {
  return (
    <>
        <div className=' flex flex-col justify-center md:justify-start items-center md:items-start md:text-left text-p-white md:mt-20'>
          <p className=' md:w-[27rem] lg:w-[44.125rem] text-[2.5rem] md:text-[4.5rem] mb-6 text-center md:text-left font-semibold'>Nice to meet you! I’m <span className=' border-b-2 border-b-p-green pb-0'>Joseph Moses</span>. </p>
          <p className='md:w-[27rem] md:text-[1.125rem] text-center md:text-left text-p-grey mb-6 '>Based in the Canada, I’m a front-end developer passionate about building accessible web apps that users love.</p>
          <p className='text-p-white block border-b-2 border-b-p-green pb-2'>CONTACT ME</p>
        </div>
    </>
  )
}

export default HeaderContentPortion