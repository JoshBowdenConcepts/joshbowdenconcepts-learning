import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({ children }: ButtonProps) => {
	return <StyledButton>
		{ children }
	</StyledButton>
}