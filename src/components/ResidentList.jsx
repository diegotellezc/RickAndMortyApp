import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'

const ResidentList = ({location}) => {
    const [currentPage, setCurrentPage] = useState(1)

    const RESIDENTS_PER_PAGE = 20
    const arrayPages = []
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

    for (let i = 1; i <= quantityPages; i++){
        arrayPages.push(i)
    }

    const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE
    const endCut = currentPage * RESIDENTS_PER_PAGE

    const residents = location?.residents

    useEffect(() => {
        setCurrentPage(1)
    }, [location])

    return (
        <>
            <section className='py-4 px-6 grid gap-8 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1250px] mx-auto'>
                {
                    location?.residents.length !== 0 ?
                    residents?.slice(startCut, endCut).map((resident) => (
                        <ResidentCard key={resident} resident={resident} />
                    )) : <div className='flex flex-col gap-4 border-2 border-dark-green'>
                            <div className='border-b-2 border-dark-green self-center'>
                                <img src="https://www.looper.com/img/gallery/blink-and-youll-miss-an-animation-error-in-rick-and-morty-season-6-episode-2/l-intro-1662656057.jpg" alt="" />
                            </div>
                            <h1 className='p-4 text-white'>There is no population in this dimension</h1>
                        </div>
                }
            </section>

            <section>
                <ul className='flex justify-center gap-4 py-4 text-white'>
                    {
                        arrayPages.map(page => <li onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    } className={`p-3 rounded-full cursor-pointer ${page === currentPage && "bg-green-800 text-white font-bold"}`} key={page}>{page}</li>)
                    }
                </ul>
            </section>
        </>
    )
}

export default ResidentList
