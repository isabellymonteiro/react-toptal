import { useEffect, useState } from 'react'
import { getCityData, getForecastData, getLocationData } from '../utils/getData'

const useWeatherData = (enabled, payload) => {
  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!enabled) return
    
    const getWeatherData = async () => {
      let locationData
      let locationKey

      try {
        // fetch by city
        if (typeof payload === 'string') {
          const data = await getCityData(payload)

          if (!data.length) throw Error('No city found')

          locationData = { mainPlace: data[0].LocalizedName, secondaryPlace: data[0].AdministrativeArea.LocalizedName }
          locationKey = data[0].Key
        } else {
          // fetch by latitude and longitude
          const { latitude, longitude } = payload
          const data = await getLocationData(latitude, longitude)

          locationData = { mainPlace: data.LocalizedName, secondaryPlace: data.SupplementalAdminAreas[0].LocalizedName }
          locationKey = data.Key
        }

        const forecastData = await getForecastData(locationKey)

        setData({ locationData, forecastData })
      } catch (err) {
        setError(err.message) 
      } finally {
        setLoading(false)
      }
    }

    getWeatherData()
    
  }, [enabled, payload])

  return {
    data,
    loading,
    error
  }
}

export default useWeatherData