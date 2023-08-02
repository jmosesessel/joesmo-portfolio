import React from 'react'
import Photo from '../assets/images/photo.svg'
import SocialBox from './SocialBox'
const HeaderImagePortion = () => {
  return (
    <>
        <div className='md:absolute md:right-0 lg:right-[10.62rem] text-p-white flex flex-col items-center mb-[2.5rem] w-[10.875rem] md:w-[20.125rem] h-[23.9375rem] bg-gradient-to-t from-p-black '>
          <div className='w-full mb-[3.06rem] mt-[1.25rem] px-[0.63rem]'>
            <SocialBox />
          </div>
          <img className='w-[10.88794rem] md:w-[20.125rem] h[15.125rem]' src={Photo} alt="profile picture" />
        </div>
    </>
  )
}

export default HeaderImagePortion