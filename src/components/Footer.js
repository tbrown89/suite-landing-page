import { FooterStyled, SocialIcons, FooterFlex } from "./styled/FooterStyled"
import Logo from "./Logo"
import fbIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import instaIcon from "../assets/icon-instagram.svg"

const Footer = () => {
    return (
        <FooterStyled>
            <FooterFlex>
                <Logo />
                <p>Copyright - suite</p>
                <SocialIcons>
                    <a href="#">
                        <img src={fbIcon} alt="go to facebook page" />
                    </a>
                    <a href="#">
                        <img src={twitterIcon} alt="go to twitter page" />
                    </a>
                    <a href="#">
                        <img src={instaIcon} alt="go to instagram page" />
                    </a>
                </SocialIcons>
            </FooterFlex>
        </FooterStyled>
    )
}

export default Footer