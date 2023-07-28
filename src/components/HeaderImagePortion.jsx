import React from 'react'
import Photo from '../assets/images/photo.svg'
const HeaderImagePortion = () => {
  return (
    <>
        <div className='text-p-white flex flex-col items-center mb-[2.5rem] w-[10.875rem] h-[23.9375rem] bg-gradient-to-t from-p-black '>
          <div className='mb-[3.06rem] mt-[1.25rem] mx-[0.63rem]'>
            <h1 className='text-p-white text-2xl mb-5'>joesmo</h1>
            <div>
              icons
            </div>
          </div>
          <img className='w-[10.88794rem] h[15.125rem]' src={Photo} alt="profile picture" />
        </div>
    </>
  )
}

export default HeaderImagePortion