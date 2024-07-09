import React, { ComponentType, Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//components
import { UsersList } from "./UsersList";

//hoc
import { withAuthRedirect } from "../../../../../common/hocs/withAuthRedirect";

//actions
import { dragUserAction, followAction, unFollowAction } from "../../../../../models/actions";

//selectors
import { getUsers, getCurrentPage, getPageSize, getportionSize, getTotalUsersCount } from "../../../../../models/selectors";

//types
import { rootStoreType } from "../../../../../app/store";
import { requestUsers, UsersPageType } from "../../model/users-reducer";
import { User } from "../../../../../common/types/users";


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
		const { currentPage, pageSize } = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}

	handleChangePage = (page: number) => {
		const { pageSize } = this.props;
		this.props.requestUsers(page, pageSize);
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
