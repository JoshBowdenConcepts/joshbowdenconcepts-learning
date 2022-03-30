import styled from 'styled-components'

export const NavContainer = styled.div<{
	sticky: boolean;
}>`
	top: -65px;
	background-color: #E2E1E0;
	width: 100vw;
	transition: top 0.24s ease-out;

	${({ sticky }) => sticky && `
		position: fixed;
		top: 0px;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  		transition: all 0.3s cubic-bezier(.25,.8,.25,1);
		background-color: white;
	`};
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
		font-family: 'Source Sans Pro', sans-serif;
		padding: 0px 10px;
		text-decoration: none;
		color: black;
		font-weight: 400;
		width: auto;
	}
`

export const Logo = styled.img`
	height: 45px;
	border-radius: 4px;
`