import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../../styles/Theme";

export const StyledMessagesListItemLink = styled(Link)`
   text-decoration: none;
   color: ${theme.colors.font};
`

export const StyledPhotoWrapper = styled.div`
   padding: 11px 14px 7px 0;
`

export const Photo = styled.img`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   object-fit: cover;
`

export const StyledMessagesListItem = styled.li`
   display: flex;
   align-items: center;
   height: 71px;
   padding-right: 64px;
   padding: 10px 0 0 20px;
`

export const StyledMessageText = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 10px 15px 10px 0;
   border-bottom: 1px solid ${theme.colors.border};
`

export const StyledMessageInfo = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 3px;
   margin-bottom: 7px;
`

export const StyledSenderMessage = styled.span`
   font-weight: 700;
   font-size: 13px;
`

export const StyledSendMessageTime = styled.span`
   font-size: 13px;
   color: #818c99;
`

export const StyledMessage = styled.span`
   font-size: 13px;
   color: ${theme.colors.secondaryFont};
`