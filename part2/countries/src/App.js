import { useState, useEffect } from "react"
import countryService from "./services/countries"
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

  const handleSearch = (e) => {
    setNewSearch(e.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newSearch.toUpperCase()))

  return (
    <div>
      <Search value={newSearch} changeHandler={handleSearch} />
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App;
