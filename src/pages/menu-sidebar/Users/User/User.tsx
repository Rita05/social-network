import { useSelector } from 'react-redux';

//actions
import { getFollowingInProgress } from '../../../../models/selectors/users-selectors';
import { useAppDispatch } from '../../../../models/store';

//thunks
import { follow, unFollow } from '../../../../models/reducers/users-reducer';

//icons
import defaultUser from '../../../../assets/icons/default-avatar.svg';
import draggableUsersIcon from '../../../../assets/icons/dots-three.svg';

//styles
import { DraggableButton, DraggableIcon, UserCard, SubscriptionButton, UserInfo, UserName, UserPhoto, UserPhotoWrapper, UserStatus, UserDetails } from "./User.styled";
import { CSS } from '@dnd-kit/utilities';

//api
import { UsersApi } from '../../../../api/users';

//types
import { User as UserType } from "../../../../types/users";
import { useSortable } from '@dnd-kit/sortable';
import { NavLink } from 'react-router-dom';

export type UserPropsType = {
	user: UserType,
	onFollowUser: (userId: number) => void,
	onUnfollowUser: (userId: number) => void,
}

export const User = (props: UserPropsType) => {
	const {
		user: { id, name, photos, status, followed },
		onFollowUser,
		onUnfollowUser
	} = props;

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

	const dispatch = useAppDispatch();

	const followingInProgress = useSelector(getFollowingInProgress);

	const styles = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const handleSubscribeUser = (userId: number) => () => {
		dispatch(follow(userId));
		// setIsFollowingInProgress(userId, true);
		// try {
		// 	const response = await UsersApi.followToUser(userId);
		// 	if (response.resultCode === 0) {
		// 		onFollowUser(userId);
		// 	}
		// 	setIsFollowingInProgress(userId, false);
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	const handleUnSubscribeUser = (userId: number) => () => {
		dispatch(unFollow(userId));
		// setIsFollowingInProgress(userId, true);
		// try {
		// 	const response = await UsersApi.unFollowFromUser(userId);
		// 	if (response.resultCode === 0) {
		// 		onUnfollowUser(userId);
		// 	}
		// 	setIsFollowingInProgress(userId, false);
		// } catch (error) {
		// 	console.log(error);
		// }
	}

	const renderSubscriptionButton = () => {
		return (
			followed ? (
				<SubscriptionButton
					disabled={followingInProgress.some(userId => userId === id)}
					onClick={handleUnSubscribeUser(id)}
				>
					{'Отписаться'}
				</SubscriptionButton>
			) :
				<SubscriptionButton
					disabled={followingInProgress.some(userId => userId === id)}
					onClick={handleSubscribeUser(id)}
				>
					{'Подписаться'}
				</SubscriptionButton>
		)
	}

	return (
		<UserCard
			key={id}
			ref={setNodeRef}
			{...attributes}
			style={styles}
		>
			<UserDetails>
				<NavLink to={`/profile/${id}`}>
					<UserPhotoWrapper>
						<UserPhoto src={photos?.small ? photos?.small : defaultUser} />
					</UserPhotoWrapper>
				</NavLink>
				<UserInfo>
					<UserName>
						{name}
					</UserName>
					<UserStatus>
						{status}
					</UserStatus>
					{renderSubscriptionButton()}
				</UserInfo>
			</UserDetails>
			<DraggableButton {...attributes} {...listeners}>
				<DraggableIcon src={draggableUsersIcon} />
			</DraggableButton>
		</UserCard>
	)
}


