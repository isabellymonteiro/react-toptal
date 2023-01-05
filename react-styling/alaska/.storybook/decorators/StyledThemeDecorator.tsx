import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../src/theme'

const StyledThemeDecorator: DecoratorFn = Story => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
)

export default StyledThemeDecorator
