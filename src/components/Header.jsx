import React from 'react'
import HeaderImagePortion from './HeaderImagePortion'
import HeaderContentPortion from './HeaderContentPortion'

const Header = () => {
  return (
    <>
        <header className='flex flex-col justify-center md:justify-start items-center md:items-start'>
            <HeaderImagePortion />
            
            <HeaderContentPortion className=" md:absolute md:top-[9.44rem]"  />
        </header>
    </>
  )
}

export default Header