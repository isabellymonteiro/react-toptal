import { HTMLAttributes } from 'react'
import * as S from './styles'

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  duration?: number
  color?: 'primary' | 'secondary' | 'warning' | 'danger' | 'black' | 'white'
}

const Loader = ({ 
  size = 'md',
  duration = 1,
  color = 'primary',
  ...props
}: LoaderProps) => <S.Loader {...props} size={size} duration={duration} color={color} />

export default Loader