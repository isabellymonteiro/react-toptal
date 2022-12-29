import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Button from './components/Button'
import TextInput from './components/TextInput'
import Loader from './components/Loader'

import * as S from './styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.Demo>
        <S.Heading1>Alaska UI</S.Heading1>

        <S.Heading2>Button</S.Heading2>
        <S.RowGrouped>
          <Button variant='outlined' fullWidth>Full width Button</Button>
          <Button>Button</Button>
          <Button variant='outlined' color='warning'>Warning</Button>
          <Button color='warning'>Warning</Button>
          <Button variant='outlined' color='danger'>Error</Button>
          <Button color='danger'>Error</Button>
        </S.RowGrouped>

        <S.Heading2>Text Input</S.Heading2>
        <S.ColumnGrouped>
          <TextInput 
            id='name'
            label='Name'
            placeholder='Your name'
            fullWidth
            required
          />
          <TextInput 
            id='sport'
            color='secondary'
            label='Favorite sport'
            labelPosition='top'
            disabled
            placeholder='Favorite Sport'
          />
          <TextInput 
            id='city'
            color='warning'
            label='City'
            labelPosition='none'
            placeholder='Your city'
            required
          />
        </S.ColumnGrouped>

        <S.Heading2>Loader</S.Heading2>
        <S.RowGrouped className='flex-row-grouped'>
          <Loader size='sm' duration={2} color='danger' />
          <Loader />
          <Loader size='lg' duration={2} color='secondary' />
          <Loader size='xl' duration={3} color='warning' />
        </S.RowGrouped>
      </S.Demo>
    </ThemeProvider>
  )
}

export default App
