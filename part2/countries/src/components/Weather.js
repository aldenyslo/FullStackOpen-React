const Weather = ({country, weather}) => {
    if (country.length === 1 && weather) {
        return (
            <div>
                <h2>Weather in {country[0].capital[0]}</h2>
                <p>temperature {weather.main.temp} Celsius</p>
                <img src={` http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
                <p>wind {`${weather.wind.speed} m/s`}</p>
            </div>
        )
        }
}

export default Weather