import { HeaderStyled } from "./styled/HeaderStyled"
import Logo from "./Logo"
import { ButtonSecondary } from "./styled/ButtonStyled"

const Header = () => {
    return (
        <HeaderStyled>
            <Logo />
            <ButtonSecondary>
                Request Beta Access
            </ButtonSecondary>
        </HeaderStyled>
    )
}

export default Header