import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ModalInfo } from './ModalInfo'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleModalInfo = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    useEffect(() => {
    axios.get(resident)
    .then((res) => setResidentInfo(res.data))
    .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <article onClick={handleModalInfo} className='rounded-md border-2 border-dark-green residentCard cursor-pointer'>
                <div className='relative'>
                    <img className='w-full object-center border-b-2 border-dark-green hover:animate-pulse' src={residentInfo?.image} alt="Resident image" />

                    <div className='absolute bottom-4 left-1/2 -translate-x-1/2 border-2 border-dark-green bg-[#020A02]/80 text-white p-1 px-8 flex gap-2 items-center hover:px-10 hover:p-2'>
                        <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
                        <span>{residentInfo?.status}</span>
                    </div>
                </div>

                <section className='bg-transparent text-white p-8 flex flex-col'>
                    <h3 className='text-2xl font-semibold self-center pb-5 text-dark-green'>{residentInfo?.name}</h3>

                    <ul>
                        <li>
                            <span className='text-light-gray'>Species: </span>
                            <span>{residentInfo?.species}</span>
                        </li>

                        <li>
                            <span className='text-light-gray'>Origin: </span>
                            <span>{residentInfo?.origin.name}</span>
                        </li>

                        <li>
                            <span className='text-light-gray'>Appearencies: </span>
                            <span>{residentInfo?.episode.length}</span>
                        </li>
                    </ul>
                </section>
            </article>
            
            {
                modalIsOpen && <ModalInfo residentInfo={residentInfo} closeModal={closeModal} />
            }
            
        </>
    )
}

export default ResidentCard
