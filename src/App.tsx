import React, { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//store
import { rootStoreType, useAppDispatch } from './models/store';

//hocs
import { WithSuspense } from './hocs/with-suspense';

//selectors
import { getIsAuthUser } from './models/selectors';

//thunks
import { initializeApp } from './models/reducers/app-reducer';

//components
import { MenuSideBar } from './pages/menu-sidebar/MenuSideBar';
import { MessengerWithAuthRedirect } from './pages/menu-sidebar/Messenger/Messenger';
import { ProfileContainer } from './pages/menu-sidebar/Profile/ProfileContainer';
import { DialogueContainer } from './pages/menu-sidebar/Messenger/Dialogue/DialogueContainer';
import { UsersContainer } from './pages/menu-sidebar/Users/UsersList/UsersContainer';
import { Error } from './pages/errors/Error';
import { HeaderContainer } from './pages/header/HeaderContainer';
import { Login } from './pages/login/Login';
import { Preloader } from './elements/ui/preloader/Preloader';

//styles
import { AppPreloader, Container, MainContent } from './App.styled';

const PATH = {
  BASEURL: '/',
  PROFILE: '/profile',
  MESSAGES: '/messages',
  SETTINGS: '/settings',
  ERROR: '/error',
  USERS: '/users',
  AUTH: '/login'
} as const

export const App = () => {
  const ProfileWithSuspense = WithSuspense(ProfileContainer);
  const DialogueWithSuspense = WithSuspense(DialogueContainer);
  const UsersWithSuspense = WithSuspense(UsersContainer);
  const HeaderWithSuspense = WithSuspense(HeaderContainer);

  const isAuth = useSelector(getIsAuthUser);
  const isInitialized = useSelector<rootStoreType, boolean>(state => state.app.initialized);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [])

  if (!isInitialized) {
    return <Preloader className={AppPreloader} />;
  }

  return (
    <Container isAuth={true}>
      <HeaderWithSuspense />
      <MainContent isAuth={isAuth}>
        {isAuth && <MenuSideBar />}
        <Routes>
          <Route path={PATH.BASEURL} element={<Navigate to={PATH.PROFILE} />} />
          <Route
            path={PATH.PROFILE}
            element={<ProfileWithSuspense />} />
          <Route
            path={`${PATH.PROFILE}/:userId?`}
            element={<ProfileWithSuspense />}
          />
          <Route
            path={`${PATH.MESSAGES}/:id`}
            element={<DialogueWithSuspense />}
          />
          <Route path={PATH.MESSAGES} element={<MessengerWithAuthRedirect />} />
          <Route path={PATH.USERS} element={<UsersWithSuspense />} />
          <Route path={PATH.AUTH} element={<Login />} />
          <Route path={"/*"} element={<Error message={'Not found'} />} />
          <Route path={`${PATH.MESSAGES}/*`} element={<Error message={'Not found'} />} />
          {/* <Route path={PATH.ERROR} element={<Error />} />
          <Route path={"/*"} element={<Navigate to={PATH.ERROR} />} /> */}
        </Routes>
      </MainContent>
      {/* )} */}
    </Container>
  );
}
