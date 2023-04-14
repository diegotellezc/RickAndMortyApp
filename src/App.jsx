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
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input id='locationId' className='border-2 border-black' type="text" placeholder='Type a location Id...' />
          <button>Search <i className='bx bx-search'></i></button>
        </div>

        <h2>Welcome to the crazy universe!</h2>
      </form>


      <Location location={location} />
      <ResidentList location={location} />
    </div>
  )
}

export default App
