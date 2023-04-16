import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'

function App() {
  const [location, setLocation] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.locationId.value

    axios.get(`https://rickandmortyapi.com/api/location/${newLocation}`)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [])


  //Aquí empieza lo que se va a renderizar
  return (
    <div className="App bg-[url('/images/bg-rickandmorty.png')] bg-cover font-sans bg-center min-h-screen">

      <header className='flex flex-col items-center gap-8 mb-8'>
        <div className='flex justify-center'>
          <img className='absolute top-0 w-[100%] z-0 lg:w-[70%] 2xl:w-[55%]' src="/images/greenShadow-title.png" alt="" />
          <img className='w-[70%] m-auto z-10' src="/images/circle-title-rick.png" alt="" />
          <img className='absolute z-20 w-[80%] top-8 hover:animate-pulse sm:w-[60%] lg:w-[40%]' src="/images/title-rickandmorty.png" alt="" />
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-8'>
          <div className='flex w-auto h-[45px] border-2 border-dark-green'>
              <input id='locationId' className='w-[80%] h-full border-2 border-none px-6 bg-transparent text-white' type="text" placeholder='Type a location Id...' />
              <button className='flex justify-center items-center bg-light-green w-[20%] h-full border-dark-green border-l-2 text-white text-xl hover:bg-dark-green hover:text-black'>
                  <i className='bx bx-search'></i>
              </button>
          </div>

          <h2 className='text-dark-green'>Welcome to the crazy universe!</h2>
      </form>
      </header>

      <Location location={location} />
      <ResidentList location={location} />
    </div>
  )
}

export default App
