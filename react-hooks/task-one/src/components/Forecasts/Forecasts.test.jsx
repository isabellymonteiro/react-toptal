import { render, screen } from "@testing-library/react"
import Forecasts from "./Forecasts"

const TestIdMock = {
  ForecastCard: 'forecast-card-root'
}

const forecastDataMock = [1, 2]

jest.mock('../ForecastCard', () => () => <li data-testid={TestIdMock.ForecastCard}></li>)

describe('ForecastCard', () => {
  describe('when there is forecast data', () => {
    it('renders correctly', () => {
      render(<Forecasts forecastData={forecastDataMock} />)

      expect(screen.getByRole('list')).toBeInTheDocument()
      expect(screen.getAllByTestId(TestIdMock.ForecastCard)).toHaveLength(forecastDataMock.length)
    })
  })
})