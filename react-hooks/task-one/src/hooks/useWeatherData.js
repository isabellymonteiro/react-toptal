import { useEffect, useState } from 'react'

const API_KEY = 'GoVQSMAEFnA7tFcFDNtkIA0r4ViHOffq'
const URL = 'http://dataservice.accuweather.com'

const useWeatherData = (success, position) => {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!success) return

    const {latitude, longitude } = position

    const getWeatherData = async () => {
      try {
        const locationResponse = await fetch(
          `${URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
        )
      
        if (!locationResponse.ok) throw new Error('Something went wrong getting location')
        
        const locationData = await locationResponse.json()

        const forecastResponse = await fetch(
          `${URL}/forecasts/v1/daily/5day/${locationData.Key}?apikey=${API_KEY}`
        )

        if (!forecastResponse.ok) throw new Error('Something went wrong getting location weather')

        const forecastData = await forecastResponse.json()

        setData({ locationData, forecastData })
      } catch (err) {
        setError(err.message) 
      } finally {
        setLoading(false)
      }
    }

    getWeatherData()
    
  }, [success, position])

  return {
    data,
    loading,
    error
  }
}

export default useWeatherData