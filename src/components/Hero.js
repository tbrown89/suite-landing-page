import { Intro, HeroImg, Stats } from "./styled/HeroStyled"
import { HeroFlexMd, HeroFlexLg } from "./styled/Flex"
import { ButtonPrimary } from "./styled/ButtonStyled"
import heroLandscape from "../assets/image-hero-landscape.png"
import heroPortrait from "../assets/image-hero-portrait.png"
import heroPattern from "../assets/pattern-curved-line-1.svg"

const Hero = () => {
    return (
        <>
            <HeroFlexLg>
                <HeroFlexMd>
                    <Intro>
                        <img src={heroPattern} className="heroPattern" />
                        <h1>
                            <span>A</span> super solution <span>for your</span> business.
                        </h1>
                        <p>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
                        <ButtonPrimary>
                            Request Beta Access
                        </ButtonPrimary>
                    </Intro>
                    <HeroImg>
                        <picture>
                            <source media="(min-width:768px)" srcset={heroPortrait} />
                            <img src={heroLandscape} alt="hero" />
                        </picture>
                    </HeroImg>
                </HeroFlexMd>
                <Stats>
                    <div>
                        <h2>2K+</h2>
                        <p>Companies</p>
                    </div>
                    <div>
                        <h2>8</h2>
                        <p>Languages</p>
                    </div>
                    <div>
                        <h2>1.2M</h2>
                        <p>Leads</p>
                    </div>
                </Stats>
            </HeroFlexLg>
        </>
    )
}

export default Hero