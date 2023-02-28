import { useState, useEffect } from "react"
import countryService from "./services/countries"
import weatherService from "./services/weather"
import Search from "./components/Search"
import Countries from "./components/Countries"
import Weather from "./components/Weather"

function App() {
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initCountries => {
        setCountries(initCountries)
      })
  }, [])


  useEffect(() => {
    if (showCountries.length === 1) {
      weatherService
        .getWeather(showCountries[0].cca2, showCountries[0].capital[0])
        .then(weather => setWeather(weather))
    }
  }, [showCountries])

  const filterCountries = (search) => {
    const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(search.toUpperCase()))
    setShowCountries(countriesToShow)
  }

  const handleSearch = (e) => {
    setNewSearch(e.target.value)
    filterCountries(e.target.value)
  }

  const handleShow = (name) => {
    setNewSearch(name);
    filterCountries(name)
  }

  return (
    <div>
      <Search value={newSearch} changeHandler={handleSearch} />
      <Countries countries={showCountries} showHandler={handleShow} />
      <Weather country={showCountries} weather={weather} />
    </div>
  )
}

export default App;
