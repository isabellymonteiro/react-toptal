import styled from 'styled-components'
import { ButtonProps } from './Button'

export const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  font-family: inherit;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .5px;
  color: ${props => props.variant === 'outlined' 
    ? props.theme.colors[props.color]
    : ( 
        props.color === 'secondary' || props.color === 'warning'
          ? props.theme.colors.black
          : props.theme.colors.white 
      )
  };
  text-transform: uppercase;
  background-color: ${props => props.variant === 'outlined' 
    ? 'transparent'
    : props.theme.colors[props.color]
  };
  border: ${props => props.variant === 'outlined' 
    ? `1px solid ${props.theme.colors[props.color]}`
    : 'none'
  };
  border-radius: ${props => props.theme.borderRadius};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  padding: ${props => props.theme.padding};
  cursor: pointer;
  transition: .2s;

  &:hover {
    background-color: ${props => props.variant === 'outlined'
      ?  props.theme.colors[props.color] + '30'
      : props.theme.colors[props.color] + '99'
    };
  }
`