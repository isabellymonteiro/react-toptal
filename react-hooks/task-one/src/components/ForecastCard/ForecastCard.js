import { fahrenheitToCelsius } from '../../utils/fahrenheitToCelsius'
import './styles.css'

const IMAGE_URL = 'https://developer.accuweather.com/sites/default/files'

const ForecastCard = ({ forecastCardData }) => {
  const { Day: day, Temperature: temperature, Date: date } = forecastCardData

  const dateObject = new Date(date)
  const formattedDate = dateObject.toLocaleString('en-US', { day: 'numeric', month: 'numeric' })
  const iconId = day.Icon.toString().padStart(2, '0')
  const minTemperature = fahrenheitToCelsius(temperature.Minimum.Value)
  const maxTemperature = fahrenheitToCelsius(temperature.Maximum.Value)

  return (
    <li className='forecastCard'>
      <span className='forecastCard__date'>{formattedDate}</span>
      <img 
        className='forecastCard__img' 
        src={`${IMAGE_URL}/${iconId}-s.png`} 
        alt={day.IconPhrase}
      />
      <span className='forecastCard__description'>{day.IconPhrase}</span>
      <div className='forecastCard__temperatures'>
        <span className='forecastCard__maxTemperature'>{maxTemperature}</span>/
        <span className='forecastCard__minTemperature'>{minTemperature}</span>ºC
      </div>
    </li>
  )
}

export default ForecastCard