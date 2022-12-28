import styled from 'styled-components'
import { TextInputProps } from './TextInput'

type TextInputContainerProps = Pick<TextInputProps, 'labelPosition'| 'fullWidth'>

type TextInputLabelProps = Pick<TextInputProps, 'color' | 'labelPosition'>

export const TextInputContainer = styled.div<TextInputContainerProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${props => props.labelPosition === 'top' ? 'column' : 'row'};
  gap: .5rem;
  width: ${props => props.fullWidth ? '100%' : '300px'};
`

export const TextInputLabel = styled.label<TextInputLabelProps>`
  font-family: inherit;
  font-weight: 500;
  color: ${props => props.theme.colors[props.color]};
  align-self: ${props => props.labelPosition === 'top' ? 'start' : 'center'};
`

export const TextInput = styled.input<TextInputProps>`
  box-sizing: border-box;
  font-family: inherit;
  font-size: .875rem;
  color: ${props => props.theme.colors[props.color]};
  background-color: transparent;
  border: ${props => `1px solid ${props.theme.colors[props.color]}`};
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.theme.padding};
  flex-grow: 1;

  &::placeholder {
    color: ${props => props.disabled
      ? props.theme.colors[props.color] + '90'
      : props.theme.colors[props.color]
    };
  }

  &:disabled {
    border-color: ${props => props.theme.colors[props.color] + '80'};
  }
`