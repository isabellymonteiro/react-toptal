import { useState } from 'react'
import useCurrentPosition from './hooks/useCurrentPosition'
import useWeatherData from './hooks/useWeatherData'
import Header from './components/Header'
import Forecasts from './components/Forecasts/Forecasts'
import Loading from './components/Loading'
import CityForm from './components/CityForm'
import Error from './components/Error'
import './App.css'

function App() {
  const [city, setCity] = useState('')

  const { position, success, error: positionError } = useCurrentPosition()
  const { data, loading, error } = useWeatherData(success || city, position || city)

  const handleSubmit = (e, city) => {
    e.preventDefault()
    setCity(city)
  }

  return (
    <div className='App'>
      {positionError && !city && <CityForm handleSubmit={handleSubmit} />}
      {error && <Error errorMessage={error} />}
      {!positionError && !error && loading && <Loading width='140px'/>}
      {!loading && !error && (
        <>
          <Header 
            title="How's the weather?" 
            subtitle={`${data.locationData.mainPlace}, ${data.locationData.secondaryPlace}`}
          />
          <main>
            <Forecasts forecastData={data.forecastData.DailyForecasts} />
          </main>
        </>
      )}
    </div>
  )
}

export default App
