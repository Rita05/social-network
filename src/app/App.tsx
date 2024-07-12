import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

//store
import { rootStoreType, useAppDispatch } from './store';

//hocs
import { WithSuspense } from '../common/hocs/with-suspense';

//selectors
import { getIsAuthUser } from '../models/selectors';

//thunks
import { initializeApp } from './model/app-reducer';

//components
import { MenuSideBar } from '../features/menu-sidebar/MenuSideBar';
import { MessengerWithAuthRedirect } from '../features/menu-sidebar/Messenger/Messenger';
import { ProfileContainer } from '../features/menu-sidebar/Profile/ui/ProfileContainer';
import { DialogueContainer } from '../features/menu-sidebar/Messenger/ui/DialogList/Dialogue/DialogueContainer';
import { UsersContainer } from '../features/menu-sidebar/Users/ui/UsersList/UsersContainer';
import { ErrorPage } from '../features/errors/ui/ErrorPage';
import { HeaderContainer } from '../features/header/ui/HeaderContainer';
import { Login } from '../features/login/ui/Login';
import { Preloader } from '../elements/ui/preloader/Preloader';

//styles
import { AppPreloader, Container, MainContent } from './App.styled';

export const PATH = {
  BASEURL: '/',
  PROFILE: '/profile',
  MESSAGES: '/messages',
  SETTINGS: '/settings',
  ERROR: '/error',
  USERS: '/users',
  AUTH: '/login'
} as const

export const App = () => {
  const ProfileWithSuspense = WithSuspense(lazy(() => import('../features/menu-sidebar/Profile/ui/ProfileContainer').then(module => ({ default: module.ProfileContainer }))));
  const DialogueWithSuspense = WithSuspense(lazy(() => import('../features/menu-sidebar/Messenger/ui/DialogList/Dialogue/DialogueContainer').then(module => ({ default: module.DialogueContainer }))));
  const UsersWithSuspense = WithSuspense(lazy(() => import('../features/menu-sidebar/Users/ui/UsersList/UsersContainer').then(module => ({ default: module.UsersContainer }))));
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
      <Suspense fallback={<Preloader />}>
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
            <Route path={"/*"} element={<ErrorPage />} />
            <Route path={`${PATH.MESSAGES}/*`} element={<ErrorPage />} />
            {/* <Route path={PATH.ERROR} element={<Error />} />
          <Route path={"/*"} element={<Navigate to={PATH.ERROR} />} /> */}
          </Routes>
        </MainContent>
      </Suspense>
    </Container>
  );
}
