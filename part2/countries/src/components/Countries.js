import Country from "./Country"
import CountryInfo from "./CountryInfo"

const Countries = ({countries, showHandler}) => {
    if (countries.length > 10) {
        return <p>Too many matches, specify another filter</p>
    }

    if (countries.length === 1) {
        return <CountryInfo country={countries[0]} />
    }

    return (
        countries.map((country) => <Country key={country.name.common} name={country.name.common} showHandler={showHandler} />)
    )
}

export default Countries