import React from 'react'

const Location = ({location}) => {
    return (
        <section className='text-light-gray border-2 flex flex-col items-start mx-6 p-4 gap-4 max-w-5xl lg:m-auto'>
            <h2 className='self-center text-[1rem] font-semibold text-dark-green'>🪐 {location?.name} 🪐</h2>
            <ul className='flex flex-col w-full sm:flex-row sm:justify-evenly'>
                <li>Type: <span className='text-white'>{location?.type}</span></li>
                <li>Location: <span className='text-white'>{location?.dimension}</span></li>
                <li>Population: <span className='text-white'>{location?.residents.length}</span></li>
            </ul>
        </section>
    )
}

export default Location
