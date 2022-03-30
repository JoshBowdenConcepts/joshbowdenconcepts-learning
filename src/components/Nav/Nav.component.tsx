import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button/Button.component'
import { NavProps } from './Nav.types'
import { NavContainer, MainNavigation, Logo } from './Nav.styles'

export const Nav = ({ brand, ...props }: NavProps) => {
	const [sticky, setSticky] = useState(false);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	})

	const handleScroll = () => {
		if (window.pageYOffset > 65) {
			setSticky(true);
		} else {
			setSticky(false)
		}
	}

	return <NavContainer sticky={sticky}>
		<MainNavigation {...props} ref={container}>
			<a href="/" aria-label="Home Link">
				{
					brand.logo
						? <Logo src={brand.logo} alt={brand.name}></Logo>
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