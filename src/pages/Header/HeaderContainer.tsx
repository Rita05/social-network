import { ComponentType, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

//components
import { Header } from './Header';

//types
import { AuthUserStateType, getAuthUser } from '../../models/reducers/auth-reducer';
import { rootStoreType, useAppDispatch } from '../../models/store';

type HeaderMapStateToPropsType = {
	auth: AuthUserStateType
}

type HeaderMapDispatchToPropsType = {
	getAuthUser: () => void
}

export type HeaderContainerPropsType = HeaderMapStateToPropsType & HeaderMapDispatchToPropsType;

export const HeaderComponent = (props: HeaderContainerPropsType) => {

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAuthUser());
	}, [])
	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state: rootStoreType): HeaderMapStateToPropsType => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps: HeaderMapDispatchToPropsType = {
	getAuthUser
}

export const HeaderContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps))(HeaderComponent);