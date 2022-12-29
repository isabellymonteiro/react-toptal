import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  color: 'primary' | 'secondary' | 'warning' | 'danger' | 'black' | 'white'
  label: string
  labelPosition?: 'top' | 'left' | 'none'
  fullWidth?: boolean
  disabled?: boolean
  required?: boolean
}

const TextInput = ({
  id,
  color, // provide default?
  label,
  labelPosition = 'left',
  fullWidth = false,
  disabled = false,
  required = false,
  ...props
}: TextInputProps) => {
  return (
    <S.TextInputContainer labelPosition={labelPosition} fullWidth={fullWidth}>
      {labelPosition !== 'none' &&
        <S.TextInputLabel htmlFor={id} color={color} labelPosition={labelPosition}>
          {required ? label + '*' : label}
        </S.TextInputLabel>
      }
      <S.TextInput
        {...props}
        id={id}
        type='text'
        color={color}
        label={label}
        labelPosition={labelPosition}
        aria-label={labelPosition === 'none' ? label : undefined}
        fullWidth={fullWidth}
        disabled={disabled}
        required={required}
      />
    </S.TextInputContainer>
  )
}

export default TextInput