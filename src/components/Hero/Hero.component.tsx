import { StyledHero } from "./Hero.styles"
import { HeroProps } from "./Hero.types"

export const Hero = ({ ...props }: HeroProps) => {
	return <StyledHero></StyledHero>
}