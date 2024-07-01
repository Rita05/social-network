import { ComponentType, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

//components
import { Header } from './Header';

//types
import { AuthUserStateType } from '../../models/reducers/auth-reducer';
import { rootStoreType } from '../../models/store';

type HeaderMapStateToPropsType = {
	auth: AuthUserStateType
}

export type HeaderContainerPropsType = HeaderMapStateToPropsType;

export const HeaderComponent = (props: HeaderContainerPropsType) => {

	return (
		<Header {...props} />
	)
}

const mapStateToProps = (state: rootStoreType): HeaderMapStateToPropsType => {
	return {
		auth: state.auth
	}
}


export const HeaderContainer = compose<ComponentType>(connect(mapStateToProps, {}))(HeaderComponent);