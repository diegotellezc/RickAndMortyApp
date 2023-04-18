import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-auto flex flex-col items-center text-white m-8 gap-2 md:flex-row md:justify-evenly'>
            
            <div className='flex gap-x-4'>
                <a className='text-4xl text-dark-green' target='_blank' href="https://github.com/diegotellezc">
                    <i className='bx bxl-github' ></i>
                </a>

                <a className='text-4xl text-dark-green' target='_blank' href="https://www.linkedin.com/in/diegotellezc/">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>

                <a className='text-4xl text-dark-green' target='_blank' href="https://www.instagram.com/diegotellezc/">
                    <i className='bx bxl-instagram-alt' ></i>
                </a>

                <a className='text-4xl text-dark-green' target='_blank' href="https://tictactoebydt.netlify.app/">
                    <i className='bx bx-question-mark' ></i>
                </a>
            </div>

            <p>• All rights reserved ©2023 • </p>
            <p>@diegotellezc</p>
        </footer>
    )
}

export default Footer
