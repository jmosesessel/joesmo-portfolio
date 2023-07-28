import React from 'react'
import HeaderImagePortion from './HeaderImagePortion'
import HeaderContentPortion from './HeaderContentPortion'

const Header = () => {
  return (
    <>
        <header className='flex flex-col justify-center items-center'>
            <HeaderImagePortion/>
            
            <HeaderContentPortion/>
        </header>
    </>
  )
}

export default Header