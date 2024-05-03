//icons
import { useEffect, useState } from 'react';
import LikesImg from '../../../../assets/icons/like.svg';
import LikedImg from '../../../../assets/icons/liked.svg';


//types
import { PostType } from "../../../../types/posts"

//styles
import { StyledLikes, StyledLikesButton, StyledLikesCounter, StyledLikesImg, StyledPostCreator, StyledPostCreatorImg, StyledPostText, StyledProfilePost, StyledProfilePostCreatorInfo } from "./ProfilePost.styled";

type ProfilePostPropsType = {
	fullName: string
	avatar: string
	post: PostType;
	onUpdateLikesCount: (postId: number, liked: boolean) => void
}

export const ProfilePost = (props: ProfilePostPropsType) => {
	const {
		post: { id, message, likesCount },
		avatar,
		fullName,
		onUpdateLikesCount
	} = props;

	const [liked, setLiked] = useState<boolean | null>(null);

	useEffect(() => {
		if (liked !== null) {
			onUpdateLikesCount(id, liked);
		}
	}, [liked])

	const handleUpdateLikesCount = () => () => {
		setLiked(!liked);
		// const newLiked = !liked;
		// setLiked(newLiked);
		// onUpdateLikesCount(id, newLiked);
	}

	return (
		<StyledProfilePost>
			<StyledProfilePostCreatorInfo>
				<StyledPostCreatorImg src={avatar} />
				<StyledPostCreator>
					{fullName}
				</StyledPostCreator>
			</StyledProfilePostCreatorInfo>
			<StyledPostText>
				{message}
			</StyledPostText>
			<StyledLikes>
				<StyledLikesButton
					onClick={handleUpdateLikesCount()}
				>
					<StyledLikesImg src={liked ? LikedImg : LikesImg} alt='like' />
				</StyledLikesButton>
				<StyledLikesCounter>{likesCount}</StyledLikesCounter>
			</StyledLikes>
		</StyledProfilePost>
	)
}