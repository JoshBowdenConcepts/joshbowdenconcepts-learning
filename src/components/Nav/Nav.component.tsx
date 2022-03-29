import { useRef, useState } from 'react'
import { Button } from '../Button/Button.component'
import { NavProps } from './Nav.types'
import { NavContainer, MainNavigation } from './Nav.styles'

export const Nav = ({ brand, ...props }: NavProps) => {
	const [sticky, setSticky] = useState(false);
	const container = useRef<HTMLDivElement>(null);

	return <NavContainer sticky={sticky}>
		<MainNavigation {...props} ref={container}>
			<a href="/">
				{
					brand.logo
						? <img src="https://picsum.photos/150/50" alt={brand.name}></img>
						: <Button>{brand.name}</Button>
				}
			</a>
			<a href="">Home</a>
			<a href="">About</a>
			<a href="">Blog</a>
			<a href="">Contact</a>
		</MainNavigation>
	</NavContainer>
}