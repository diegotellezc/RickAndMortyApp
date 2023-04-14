import React from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({location}) => {
    
    const residents = location?.residents

    return (
        <section>
            {
                residents?.map((resident) => (
                    <ResidentCard key={resident} resident={resident} />
                ))
            }
        </section>
    )
}

export default ResidentList
