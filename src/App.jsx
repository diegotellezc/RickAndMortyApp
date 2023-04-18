import { useEffect, useState } from 'react'
import './App.css'
import { getRandomDimension } from './helpers/random'
import axios from 'axios'
import Location from './components/Location'
import ResidentList from './components/ResidentList'
import TitleImage from './components/TitleImage'
import Footer from './components/Footer'

function App() {
  const [location, setLocation] = useState()
  const [inputValue, setInputValue] = useState("")
  const [dimensionsArray, setDimensionsArray] = useState()

  const handleInputValue = (e) => {
    e.preventDefault()
    setInputValue(e.target.value)
    const newLocation = e.target.value

    const URL = `https://rickandmortyapi.com/api/location/?name=${newLocation}`
    axios.get(URL)
    .then((res) => setDimensionsArray(res.data))
    .catch((err) => console.log(err))
  }

  const handleDimension = (dimensionUrl) => {

      axios.get(dimensionUrl)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))

      setInputValue("")
  }
  

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`

    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [])


  //Aquí empieza lo que se va a renderizar
  return (
    <div className="App bg-[url('/images/bg-rickandmorty.png')] bg-cover font-sans bg-center flex flex-col min-h-screen">

      <header className='flex flex-col items-center gap-8 mb-8'>
        <TitleImage />

        <form className='flex flex-col items-center relative gap-8'>
          <div className='flex w-auto h-[45px] border-2 border-dark-green rounded-md sm:w-[600px]'>
                <input id='locationId' autoComplete="off" value={inputValue} onChange={handleInputValue} className='w-[80%] h-full border-2 border-none px-8 bg-transparent text-white' type="text" placeholder='Type a dimension...' />
                <button className='flex justify-center items-center bg-light-green w-[21%] h-full border-dark-green border-l-2 text-white text-xl hover:bg-dark-green hover:text-black'>
                    <i className='bx bx-search'></i>
                </button>
          </div>

          {
            inputValue && <ul className='absolute top-[44px] bg-black/90 gridtext-sm z-20 border-2 border-dark-green w-full sm:w-[600px]'>
                {
                  dimensionsArray?.results.map((dimension) => (
                    <li key={dimension.id} className='text-white p-4 cursor-pointer hover:bg-dark-green hover:text-black' onClick={() => handleDimension(dimension.url)}>
                      {dimension.name}
                    </li>
                  ))
                }
            </ul>
          }
        </form>
      
        <h2 className='text-dark-green'>Welcome to the crazy universe!</h2>
      </header>
      
      <main className="flex-grow">
      <Location location={location} />
      <ResidentList location={location} />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default App
