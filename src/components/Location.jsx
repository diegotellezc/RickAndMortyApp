import React from 'react'

const Location = ({location}) => {
    return (
        <section>
            <h2>{location?.name}</h2>
            <ul>
                <li>{location?.type}</li>
                <li>{location?.dimension}</li>
                <li>Population: {location?.residents.length}</li>
            </ul>
        </section>
    )
}

export default Location
