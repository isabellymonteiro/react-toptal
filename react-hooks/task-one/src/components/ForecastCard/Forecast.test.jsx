import { render, screen } from "@testing-library/react"
import ForecastCard from "./ForecastCard"

const forecastCardDataMock = {
  Date: "2023-01-21T07:00:00+00:00",
  Day: {Icon: 3, IconPhrase: 'Thunderstorms'},
  Temperature: {
    Maximum: { Value: 83 },
    Minimum: { Value: 66 }
  }
}

const IMAGE_URL = 'https://developer.accuweather.com/sites/default/files'

const renderComponent = () => render(<ForecastCard forecastCardData={forecastCardDataMock} />)

describe('ForecastCard', () => {
  describe('when there is forecast card data', () => {
    it('renders correctly', () => {
      renderComponent()

      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('renders the forecast formatted date', () => {
      renderComponent()

      expect(screen.getByText('1/21')).toBeInTheDocument()
    })

    it('renders the forecast image', () => {
      renderComponent()

      const image = screen.getByRole('img')

      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', `${IMAGE_URL}/03-s.png`)
    })

    it('renders the forecast day iconPhrase', () => {
      renderComponent()

      expect(screen.getByText(forecastCardDataMock.Day.IconPhrase)).toBeInTheDocument()
    })

    it('renders the forecast min temperature in Celsius', () => {
      renderComponent()

      expect(screen.getByText(18.9)).toBeInTheDocument()
    })

    it('renders the forecast max temperature in Celsius', () => {
      renderComponent()

      expect(screen.getByText(28.3)).toBeInTheDocument()
    })
  })
})