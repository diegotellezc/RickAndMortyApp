import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({resident}) => {
    const [residentInfo, setResidentInfo] = useState()

    useEffect(() => {

    axios.get(resident)
    .then((res) => setResidentInfo(res.data))
    .catch((err) => console.log(err))
    }, [])

    return (
        <article>
            <div>
                <img src={residentInfo?.image} alt="Resident image" />
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
