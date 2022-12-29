import styled from 'styled-components'
import { LoaderProps } from './Loader'

const LoaderSize = {
  sm: '25px',
  md: '50px',
  lg: '75px',
  xl: '100px'
}

export const Loader = styled.div<LoaderProps>`
  border: 4px solid ${props => props.theme.colors[props.color!]};
  border-radius: 50%;
  border-right-color: transparent;
  width: ${props => LoaderSize[props.size!]};
  height: ${props => LoaderSize[props.size!]};
  animation-name: rotate-loader;
  animation-duration: ${props => `${props.duration}s`};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes rotate-loader {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`