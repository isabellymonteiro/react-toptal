import { ButtonHTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'outlined' | 'contained'
  color: 'primary' | 'secondary' | 'warning' | 'danger'
  fullWidth?: boolean
}

const Button = ({ children, variant, color, fullWidth = false, ...props }: ButtonProps) => {
  return (
    <S.Button {...props} variant={variant} color={color} fullWidth={fullWidth}>
      {children}
    </S.Button>
  )
}

export default Button