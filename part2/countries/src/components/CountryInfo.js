const CountryInfo = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.keys(country.languages).map(lang => <li key={lang}>{country.languages[lang]}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}></img>
        </div>
    )
}

export default CountryInfo