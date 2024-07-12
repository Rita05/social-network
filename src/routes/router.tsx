import { createHashRouter, Navigate } from "react-router-dom";

//components
import { App } from "../app/App";
import { ErrorPage } from "../features/errors/ui/ErrorPage";
import { Profile } from "../features/menu-sidebar/Profile/ui/Profile";

export const PATH = {
	BASEURL: '/',
	PROFILE: '/profile',
	MESSAGES: '/messages',
	SETTINGS: '/settings',
	ERROR: '/error',
	USERS: '/users',
	AUTH: '/login'
} as const

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			// {
			// 	path: PATH.PROFILE,
			// 	element: <Profile />
			// },
			// {
			// 	path: PATH.PROTECTED,
			// 	element: (
			// 		<ProtectedRoute>
			// 			<ProtectedPage />
			// 		</ProtectedRoute>
			// 	),
			// },
			// {
			// 	path: '/error',
			// 	element: <Error/>

			// },
			// {
			// 	path: '/',
			// 	element: <Navigate to={PATH.ADIDAS} />
			// }
		]
	}
]);

