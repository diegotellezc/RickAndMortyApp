import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    console.log(residentInfo)
    const handleModalInfo = () => {
        setModalIsOpen(true)
    }

    useEffect(() => {
    axios.get(resident)
    .then((res) => setResidentInfo(res.data))
    .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <article onClick={handleModalInfo} className='border-2 border-dark-green residentCard cursor-pointer'>
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
                modalIsOpen && <section className='fixed inset-0 flex items-center justify-center bg-opacity-70 bg-black z-40'>
                    <div className='relative border-2 border-dark-green w-[70%] sm:w-[60%] max-w-[800px] modalCard max-h-[80vh] flex flex-col overflow-y-auto md:flex-row md:max-w-2xl'>
                        <div>
                            <img className='w-full md:w-[500px] md:h-full md:object-cover' src={residentInfo?.image} alt="Resident image" />
                        </div>
                        
                        <div className='w-full text-white p-8 flex flex-col bg-black border-t-2 border-dark-green md:border-t-0 md:border-l-2'>
                            <h3 className='text-2xl font-semibold self-center pb-5 text-dark-green'>{residentInfo?.name}</h3>

                            <ul>
                                <li>
                                    <span className='text-light-gray'>Species: </span>
                                    <span>{residentInfo?.species}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Type: </span>
                                    <span>{(residentInfo?.type) || "Undefined"} </span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Status: </span>
                                    <span>{residentInfo?.status}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Gender: </span>
                                    <span>{residentInfo?.gender}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Appearencies: </span>
                                    <span>{residentInfo?.episode.length}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Origin: </span>
                                    <span>{residentInfo?.origin.name}</span>
                                </li>

                                <li>
                                    <span className='text-light-gray'>Location: </span>
                                    <span>{residentInfo?.location.name}</span>
                                </li>

                            </ul>
                        </div>

                        <button onClick={()=>  setModalIsOpen(false)} className='absolute top-2 right-3 cursor-pointer'>
                            <i className='bx bx-x-circle text-dark-green text-4xl'></i>
                        </button>
                    </div>
                    
                </section>
            }
            
        </>
    )
}

export default ResidentCard
