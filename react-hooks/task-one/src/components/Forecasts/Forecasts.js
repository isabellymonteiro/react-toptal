import ForecastCard from '../ForecastCard'
import './styles.css'

const Forecasts = ({ forecastData }) => (
  <ul className='forecasts'>
    {forecastData.map((forecast, index) => 
      <ForecastCard key={index} forecastCardData={forecast} />
    )}
  </ul>
  )

export default Forecasts