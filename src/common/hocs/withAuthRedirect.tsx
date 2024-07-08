import React, { ComponentType } from "react";
import { connect, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//selectors
import { getIsAuthUser } from "../../features/login/model/auth-selectors";

//types
import { rootStoreType } from "../../app/store";

type MapStatePropsType = {
	isAuth: boolean
}

const mapStateToProps = (state: rootStoreType): MapStatePropsType => ({
	isAuth: getIsAuthUser(state)
})


export const withAuthRedirect = <T extends {}>(Component: ComponentType<T>) => {

	const RedirectComponent = (props: MapStatePropsType) => {
		const { isAuth, ...rest } = props;
		if (!isAuth) {
			return <Navigate to="/login" />;
		}
		return <Component {...(rest as T)} />;
	};

	const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
	return ConnectedRedirectComponent;
}

