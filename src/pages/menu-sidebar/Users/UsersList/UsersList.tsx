import { useState } from 'react';
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from '@dnd-kit/core';
import {
	arrayMove,
	sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { restrictToParentElement } from "@dnd-kit/modifiers";

//selectors
import { getRequestStatus } from '../../../../models/selectors';

//componets
import { User } from "../User/User";
import { SortableWrapper } from "../../../../components/SortableWrapper";
import { SelectOption, SingleSelectValue } from "../../../../elements/ui/select/Select";
import { Pagination } from '../../../../components/Pagination/Pagination';
import { Preloader } from '../../../../elements/ui/preloader/Preloader';

//types
import { UsersContainerPropsType } from './UsersContainer';

//styles
import { UsersContainer, UsersSubscriptionSelect, UsersContent } from "./UsersList.styled";
import { useSelector } from 'react-redux';

const usersStatus = {
	all: 'Все',
	followed: 'Подписанный',
	unfollowed: 'Неподписанный'
}

export type UsersPropsType = UsersContainerPropsType & {
	onChangePage: (page: number) => void
}

export const UsersList = (props: UsersPropsType) => {

	const {
		users,
		totalUsersCount,
		pageSize,
		currentPage,
		portionSize,
		followUser,
		unfollowUser,
		dragUser,
		onChangePage,
	} = props;

	const [selectedUsersStatus, setSelectedUsersStatus] = useState('');

	const requestStatus = useSelector(getRequestStatus);

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const usersStatusOptions = Object.entries(usersStatus).map(([key, value]) => ({
		label: key,
		value
	}));

	const handleUserStatusChange = (value: SingleSelectValue) => {
		value && setSelectedUsersStatus(String(value));
	}

	const handleSubscribeUser = (userId: number) => {
		followUser(userId)
	}

	const handleUnSubscribeUser = (userId: number) => {
		unfollowUser(userId)
	}

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (over && active.id !== over.id) {
			const oldIndex = users?.findIndex((user) => user.id === active.id);
			const newIndex = users.findIndex((user) => user.id === over?.id);
			const newUsers = arrayMove(users, oldIndex, newIndex);
			dragUser(newUsers);

		}
	}

	const renderPagination = () => {
		if (users.length === 0 || users === null) {
			return;
		}
		return (
			<Pagination
				pageSize={pageSize}
				currentPage={currentPage}
				portionSize={portionSize}
				totalPages={totalUsersCount}
				onChange={onChangePage}
			/>
		)
	}

	return (
		<UsersContainer>
			<UsersSubscriptionSelect
				value={selectedUsersStatus}
				onChange={(option: SelectOption) => handleUserStatusChange(option?.value)}
				options={usersStatusOptions}
			/>
			{requestStatus === 'loading'
				? (<Preloader />)
				: (
					<>
						<DndContext
							sensors={sensors}
							collisionDetection={closestCenter}
							modifiers={[restrictToParentElement]}
							onDragEnd={handleDragEnd}
						>
							<SortableWrapper items={users.map(user => user.id)}>
								<UsersContent>
									{
										users.map((user) => {
											const { id } = user;
											return (
												<User
													key={id}
													user={user}
													onFollowUser={handleSubscribeUser}
													onUnfollowUser={handleUnSubscribeUser}
												/>
											)
										})
									}
								</UsersContent>
							</SortableWrapper>
						</DndContext>
						{renderPagination()}
					</>
				)}
		</UsersContainer >
	)
}
