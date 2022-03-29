import { NavProps } from './Nav.types'
import { MainNavigation } from './Nav.styles'

export const Nav = ({ brand, ...props }: NavProps) => {
	return <MainNavigation {...props}>
		{
			brand.logo
				? <img src="https://picsum.photos/150/50" alt={brand.name}></img>
				: <p>{brand.name}</p>
		}
	</MainNavigation>
}