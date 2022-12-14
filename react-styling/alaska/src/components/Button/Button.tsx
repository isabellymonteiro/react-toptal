import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outlined' | 'contained'
  color?: 'primary' | 'secondary' | 'warning' | 'danger'
  fullWidth?: boolean
}

const Button = ({ 
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  ...props
}: ButtonProps) => <S.Button {...props} variant={variant} color={color} fullWidth={fullWidth} />

export default Button