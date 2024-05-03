import styled from "styled-components";
import { theme } from "../../../styles/Theme";

//componenst
import { Button } from "../../../elements/ui/button/Button";
import { ContentContainer } from "../../../components/Container.styled";
import { TextArea } from "../../../elements/ui/TextArea";

export const StyledProfileSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const StyledProfileHeader = styled(ContentContainer)`
     padding: 20px;
     height: fit-content;
     min-height: fit-content;
`
export const StyledProfileHeaderCover = styled.div`
    min-height: 12.5rem;
    background-color: ${theme.colors.primary};
    border-radius: 20px;
`

export const StyledProfileHeaderContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin: 0 2rem;
`

export const StyledProfileAvatar = styled.div`
    display: flex;
    position: absolute;
	width: 15rem;
    height: auto;
`

export const StyledUserImg = styled.img`
    border: 4px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 2px 0px rgba(29, 33, 38, 0.1),0px 5px 20px 0px rgba(29, 33, 38, 0.03);
    -webkit-transform: translate(50%, -50%);
    transform: translate(50%, -50%);
    width: 100px;
    height: 100px;
    object-fit: cover;
    background-color: #fff
`
export const StyledUploadFileIcon = styled.img`
    position: absolute;
    top: 5%;
    right: 70px;
    width: 26px;
    height: 26px;
    padding: 2.5px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
`
export const StyledUserName = styled.span`
    font-size: 23px;
    font-weight: 500;
    margin-top: 4rem;
`
export const StyledProfileContent = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
`

export const StyledProfilePosts = styled.div`
    width: auto;
    height: auto;
    min-height: fit-content;
`

export const StyledProfileContentPosts = styled(ContentContainer)`
    width: auto;
    height: auto;
    min-height: fit-content;
	padding: 20px;
`