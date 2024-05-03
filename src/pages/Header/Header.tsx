

import logoIcon from '../../assets/icons/pearl.svg';

//styles
import { LogoImg, StiledHeaderContent, StyledHeader } from './Header.styled';

export const Header = () => {
    return (
        <StyledHeader>
            <StiledHeaderContent>
                <LogoImg src={logoIcon} />
                <div>поиск</div>
            </StiledHeaderContent>
        </StyledHeader>
    )
}