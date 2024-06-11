import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

//components
import { Header } from './pages/header/Header';
import { Footer } from './pages/Footer';
import { MenuSideBar } from './pages/menu-sidebar/MenuSideBar';
import { Content } from './pages/content/Content';
import { MessengerWithAuthRedirect } from './pages/menu-sidebar/Messenger/Messenger';
import { ProfileContainer } from './pages/menu-sidebar/Profile/ProfileContainer';
import { DialogueContainer } from './pages/menu-sidebar/Messenger/Dialogue/DialogueContainer';
import { UsersContainer } from './pages/menu-sidebar/Users/UsersList/UsersContainer';
import { Error } from './pages/errors/Error';
import { HeaderContainer } from './pages/header/HeaderContainer';
import { Login } from './pages/login/Login';


//styles
import { Container, MainContent } from './App.styled';
import { WithSuspense } from './hocs/with-suspense';
import { BrowserRouter } from 'react-router-dom';


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
  return (
    <Container>
      <HeaderWithSuspense />
      <MainContent>
        <MenuSideBar />
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
          {/* <Route path="messages/:id" element={<Dialogue dialogsPage={state.dialogsPage} dispatch={dispatch} store={store} />} /> */}
          <Route path={PATH.MESSAGES} element={<MessengerWithAuthRedirect />} />
          <Route path={PATH.USERS} element={<UsersWithSuspense />} />
          <Route path={PATH.AUTH} element={<Login />} />
          <Route path={"/*"} element={<Error message={'Not found'} />} />
          <Route path={`${PATH.MESSAGES}/*`} element={<Error message={'Not found'} />} />
          {/* <Route path={PATH.ERROR} element={<Error />} />
          <Route path={"/*"} element={<Navigate to={PATH.ERROR} />} /> */}
        </Routes>
        {/* <Footer/> */}
        {/* <Content /> */}
      </MainContent>
    </Container>
  );
}
