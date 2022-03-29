import styled from 'styled-components'

export const NavContainer = styled.div`
	background-color: #1F2136;
	color: white;
`

export const MainNavigation = styled.nav`
	padding: 10px;
	height: 45px;
	width: 1200px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr auto auto auto auto;

	a {
		padding: 10px;
		text-decoration: none;
		color: white;
	}
`