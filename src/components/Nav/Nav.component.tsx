import { NavProps } from './Nav.types'
import { NavContainer, MainNavigation } from './Nav.styles'

export const Nav = ({ brand, ...props }: NavProps) => {
	return <NavContainer>
		<MainNavigation {...props}>
			<a href="/">
				{
					brand.logo
						? <img src="https://picsum.photos/150/50" alt={brand.name}></img>
						: <p>{brand.name}</p>
				}
			</a>
			<a href="">Home</a>
			<a href="">About</a>
			<a href="">Blog</a>
			<a href="">Contact</a>
		</MainNavigation>
	</NavContainer>
}