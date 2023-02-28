import { useState, useEffect } from "react"
import countryService from "./services/countries"
import weatherService from "./services/weather"
import Search from "./components/Search"
import Countries from "./components/Countries"

function App() {
  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState("")

  useEffect(() => {
    countryService
      .getAll()
      .then(initCountries => {
        setCountries(initCountries)
      })
  }, [])

  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newSearch.toUpperCase()))


  const handleSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const handleShow = (name) => {
    setNewSearch(name);
  }


  return (
    <div>
      <Search value={newSearch} changeHandler={handleSearch} />
      <Countries countries={countriesToShow} showHandler={handleShow} />
    </div>
  )
}

export default App;
