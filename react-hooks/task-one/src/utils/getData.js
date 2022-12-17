// put your AccuWeather api key below
const API_KEY = ''
const URL = 'http://dataservice.accuweather.com'

export const getLocationData = async (latitude, longitude) => {
  const response = await fetch(
    `${URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
  )

  if (!response.ok) throw new Error('Something went wrong getting location')
  
  const locationData = await response.json()

  return locationData
}

export const getForecastData = async (locationKey) => {
  const response = await fetch(
    `${URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
  )

  if (!response.ok) throw new Error('Something went wrong getting location weather')

  const forecastData = await response.json()

  return forecastData
}

export const getCityData = async (city) => {
  const response = await fetch(`${URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`)

  if (!response.ok) throw new Error('Something went wrong getting city data')

  const cityData = await response.json()

  return cityData
}