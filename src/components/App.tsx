import { Nav } from './Nav/Nav.component'
import { Hero } from './Hero/Hero.component'

export const App = () => {
	return (
		<>
			<Nav brand={{name: 'JoshBowdenConcepts'}} />
			<Hero />
		</>
	);
};

