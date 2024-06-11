import React, { ComponentType, Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

//components
import { UsersList } from "./UsersList";

//hoc
import { withAuthRedirect } from "../../../../hocs/withAuthRedirect";

//actions
import { dragUserAction, followAction, setCurrentPageAction, unFollowAction } from "../../../../models/actions";

//api
import { UsersApi } from "../../../../api/users";

//types
import { rootStoreType } from "../../../../models/store";
import { getUsers, UsersPageType } from "../../../../models/reducers/users-reducer";
import { User } from "../../../../types/users";


type UsersMapStateToPropsType = {
	usersPage: UsersPageType
}

type UsersMapDispatchToPropsType = {
	followUser: (userId: number) => void
	unfollowUser: (userId: number) => void
	dragUser: (users: Array<User>) => void
	getUsers: (currentPage: number, pageSize: number) => void
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
		this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
		// this.props.setIsLoading(true);
		// try {
		// 	const data = await UsersApi.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
		// 	this.props.setIsLoading(false);
		// 	this.props.addUsers(data.items);
		// 	this.props.addTotalUsersCount(data.totalCount);
		// } catch (error) {
		// 	this.props.setIsLoading(false);
		// 	console.log(error);
		// }
	}

	handleChangePage = (page: number) => {
		// this.props.changeCurrentPage(page);
		this.props.getUsers(page, this.props.usersPage.pageSize);
		// this.props.changeCurrentPage(page)
		// this.props.setIsLoading(true);
		// UsersApi.getUsers(page, this.props.usersPage.pageSize)
		// 	.then((data) => {
		// 		this.props.setIsLoading(false);
		// 		this.props.addUsers(data.items);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	})
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
		usersPage: state.usersPage
	}
}

const mapDispatchToProps: UsersMapDispatchToPropsType = {
	followUser: followAction,
	unfollowUser: unFollowAction,
	dragUser: dragUserAction,
	getUsers
}

export const UsersContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Users);
