import React, { ComponentType, Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//components
import { UsersList } from "./UsersList";

//hoc
import { withAuthRedirect } from "../../../../hocs/withAuthRedirect";

//actions
import { dragUserAction, followAction, unFollowAction } from "../../../../models/actions";

//selectors
import { getUsers, getCurrentPage, getPageSize, getportionSize, getTotalUsersCount } from "../../../../models/selectors";

//types
import { rootStoreType } from "../../../../models/store";
import { requestUsers, UsersPageType } from "../../../../models/reducers/users-reducer";
import { User } from "../../../../types/users";


type UsersMapStateToPropsType = {
	users: Array<User>
	pageSize: number
	currentPage: number
	portionSize: number
	totalUsersCount: number
}

type UsersMapDispatchToPropsType = {
	followUser: (userId: number) => void
	unfollowUser: (userId: number) => void
	dragUser: (users: Array<User>) => void
	requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersContainerPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType;

interface UsersListState {
	selectedUsersStatus: string;
}

export class Users extends Component<UsersContainerPropsType, UsersListState> {

	constructor(props: UsersContainerPropsType) {
		super(props);
	}

	componentDidMount() {
		this.props.requestUsers(this.props.currentPage, this.props.pageSize);
	}

	handleChangePage = (page: number) => {
		this.props.requestUsers(page, this.props.pageSize);
	}

	render() {

		return (
			<UsersList
				onChangePage={this.handleChangePage}
				{...this.props}
			/>
		)
	}
}


const mapStateToProps = (state: rootStoreType): UsersMapStateToPropsType => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		currentPage: getCurrentPage(state),
		portionSize: getportionSize(state),
		totalUsersCount: getTotalUsersCount(state)
	}
}

const mapDispatchToProps: UsersMapDispatchToPropsType = {
	followUser: followAction,
	unfollowUser: unFollowAction,
	dragUser: dragUserAction,
	requestUsers
}

export const UsersContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Users);
