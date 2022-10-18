import { TestimonialStyled } from "./styled/TestimonialStyled"
import jeremySm from "../assets/image-jeremy-small.png"
import jeremyLg from "../assets/image-jeremy-large.png"
import testimonialPattern from "../assets/pattern-curved-line-2.svg"

const Testimonial = () => {
    return (
        <TestimonialStyled>
            <div>
                <picture>
                    <source media="(min-width:1200px)" srcset={jeremyLg} />
                    <img src={jeremySm} alt="Jeremy Robinson" />
                </picture>
                <img src={testimonialPattern} className="testimonial-pattern" />
            </div>
            <div className="testimonial-content">
                <header>
                    <h2><span>It just</span> works.</h2>
                </header>
                <blockquote>
                    <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”
                    </p>
                </blockquote>
                <footer>
                    <h3>Jeremy Robinson</h3>
                    <p>CMO, Fylo</p>
                </footer>
            </div>
        </TestimonialStyled>
    )
}

export default Testimonial