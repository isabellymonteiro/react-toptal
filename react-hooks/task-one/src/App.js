import useCurrentPosition from './hooks/useCurrentPosition'
import useWeatherData from './hooks/useWeatherData'
import Header from './components/Header'
import Forecasts from './components/Forecasts/Forecasts'
import Loading from './components/Loading'
import CityForm from './components/CityForm'
import Error from './components/Error'
import './App.css'

function App() {
  const { position, success, error: positionError } = useCurrentPosition()
  const { data, loading, error} = useWeatherData(success, position)

  return (
    <div className='App'>
      {positionError && <CityForm />}
      {error && <Error errorMessage={error} />}
      {!positionError && !error && loading && <Loading width='140px'/>}
      {!loading && !error && (
        <>
          <Header 
            title="How's the weather?" 
            subtitle={`${data.locationData.LocalizedName}, ${data.locationData.SupplementalAdminAreas[0].LocalizedName}`} 
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
