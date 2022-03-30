import { Nav } from './Nav/Nav.component'
import { Hero } from './Hero/Hero.component'
import logo from '../assets/JBC-Logo.jpg'

export const App = () => {
	return (
		<>
			<Nav brand={{name: 'JoshBowdenConcepts', logo: logo }} />
			<Hero />
		</>
	);
};

