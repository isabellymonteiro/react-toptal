import { useState } from 'react'
import useCurrentPosition from './hooks/useCurrentPosition'
import useWeatherData from './hooks/useWeatherData'
import Header from './components/Header'
import Forecasts from './components/Forecasts/Forecasts'
import Loader from './components/Loader'
import CityForm from './components/CityForm'
import Error from './components/Error'
import PageWrapper from './components/PageWrapper'

function App() {
  const [city, setCity] = useState('')

  const { position, success, error: positionError } = useCurrentPosition()
  const { data, loading, error } = useWeatherData(success || !!city, position ?? city)

  const handleSubmit = (e, city) => {
    e.preventDefault()
    setCity(city)
  }

  if (positionError && !city) {
    return ( 
      <PageWrapper>
        <CityForm handleSubmit={handleSubmit} />
      </PageWrapper>
    )
  }

  if (error) {
    return (
      <PageWrapper>
        <Error errorMessage={error} />
      </PageWrapper>
    )
  }

  if (loading) {
    return (
      <PageWrapper>
        <Loader width='140px'/>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <Header 
        title="How's the weather?" 
        subtitle={`${data.locationData.mainPlace}, ${data.locationData.secondaryPlace}`}
      />
      <main>
        <Forecasts forecastData={data.forecastData.DailyForecasts} />
      </main>
    </PageWrapper>
  )
}

export default App
