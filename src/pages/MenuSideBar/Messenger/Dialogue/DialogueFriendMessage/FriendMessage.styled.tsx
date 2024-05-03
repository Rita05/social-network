import styled from "styled-components";

export const FriendMessageContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	margin-left: 40px;
	margin-right: 40px;
	margin-bottom: 47px;
	display: flex;
	align-self: flex-start;
`
export const FriendMessageContent = styled.div`
	display: flex;
`
export const FriendMessageAvatar = styled.img`
	width: 36px;
	height: 36px;
	margin-top: 12px;
	margin-right: 12px;
	border-radius: 50%;
	object-fit: cover;
`
export const FriendMessageBlock = styled.div`
	position: relative;
	border-radius: 10px;
	border-bottom-left-radius: 0;
	padding: 8px 27px 8px 13px;
	min-height: 44px;
	background: #F5F7FB;
	box-shadow: 0px 1px 2px 0px rgba(29, 33, 38, 0.1),0px 5px 20px 0px rgba(29, 33, 38, 0.03);

	:after {
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		bottom: 0;
		left: -14px;
		border-top: 8px solid transparent;
		border-right: 14px solid #F5F7FB; 
		filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.1));
}
`

export const FriendName = styled.div`
	font-size: 16px;
	font-weight: 600;
	line-height: 19.5px;
`

export const FriendMessageText = styled.span`
	font-size: 16px;
	font-weight: 400;
	line-height: 19.5px;
	margin: 0;
	word-break: break-word;
`

