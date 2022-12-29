import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'outlined' | 'contained'
  color: 'primary' | 'secondary' | 'warning' | 'danger'
  fullWidth?: boolean
}

const Button = ({ 
  variant, // provide default?
  color, // provide default?
  fullWidth = false,
  ...props
}: ButtonProps) => <S.Button {...props} variant={variant} color={color} fullWidth={fullWidth} />

export default Button