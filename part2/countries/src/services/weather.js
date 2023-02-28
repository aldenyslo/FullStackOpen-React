import axios from "axios"

const api_key = process.env.REACT_APP_API_KEY
const geoUrl = "http://api.openweathermap.org/geo/1.0/direct?q="
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?"

const getCoords = (country, capital) => {
    const geoRequest = axios.get(`${geoUrl}${capital},${country}&appid=${api_key}`)
    return geoRequest.then(response => response.data)
}

const getWeather = (country, capital) => {
    const coords = getCoords(country, capital)
                    .then(geoData => {
                        const lat = geoData[0].lat
                        const lon = geoData[0].lon
                        return [lat, lon]
                    })
    const weatherRequest = coords.then(coords => axios.get(`${weatherUrl}lat=${coords[0]}&lon=${coords[1]}&appid=${api_key}&units=metric`))
    
    return weatherRequest.then(response => response.data)
}

export default {getWeather}