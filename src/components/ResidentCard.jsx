import axios from 'axios'
import React, { useEffect, useState } from 'react'

const residentsStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500"
}

const ResidentCard = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {

    axios.get(resident)
    .then((res) => setResidentInfo(res.data))
    .catch((err) => console.log(err))
    }, [])

    return (
        <article>
            <div className='relative'>
                <img className='w-full' src={residentInfo?.image} alt="Resident image" />
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center'>
                    <div className={`w-3 h-3 ${residentsStatus[residentInfo?.status]} rounded-full`}></div>
                    <span>{residentInfo?.status}</span>
                </div>
            </div>

            <section>
                <h3>{residentInfo?.name}</h3>
                <ul>
                    <li>
                        <span>Species: </span>
                        <span>{residentInfo?.species}</span>
                    </li>

                    <li>
                        <span>Origin: </span>
                        <span>{residentInfo?.origin.name}</span>
                    </li>

                    <li>
                        <span>Appearencies: </span>
                        <span>{residentInfo?.episode.length}</span>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default ResidentCard
