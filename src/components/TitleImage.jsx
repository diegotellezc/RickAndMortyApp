import React from 'react'

const TitleImage = () => {
    return (
        <div className='flex justify-center'>
            <img className='absolute top-0 w-[100%] z-0 lg:w-[70%] 2xl:w-[55%]' src="/images/greenShadow-title.png" alt="" />
            <img className='w-[70%] z-10' src="/images/circle-title-rick.png" alt="" />
            <img className='absolute z-20 w-[80%] top-8 hover:animate-pulse sm:w-[60%] lg:w-[40%]' src="/images/title-rickandmorty.png" alt="" />
        </div>
    )
}

export default TitleImage
