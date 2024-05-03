import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//components
import { Header } from './pages/Header/Header';
import { Footer } from './pages/Footer';
import { MenuSideBar } from './pages/MenuSideBar/MenuSideBar';
import { Content } from './pages/Content/Content';
import { Messenger } from './pages/MenuSideBar/Messenger/Messenger';
import { ProfileContainer } from './pages/MenuSideBar/Profile/ProfileContainer';
import { DialogueContainer } from './pages/MenuSideBar/Messenger/Dialogue/DialogueContainer';
import { Error } from './pages/Errors/Error';
import { UsersList } from './pages/MenuSideBar/Users/UsersList';

//styles
import { Container, MainContent } from './App.styled';

//types
import { StateType } from './models/old-store';

const PATH = {
  PROFILE: '/profile',
  MESSAGES: '/messages',
  SETTINGS: '/settings',
  ERROR: '/error',
  USERS: '/users'
} as const

type AppPropsType = {
  state: StateType
  store: any
  dispatch: any
}

export const App = (props: any) => {
  const { store } = props;
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <MainContent>
          <MenuSideBar />
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.PROFILE} />} />
            <Route
              path={PATH.PROFILE}
              element={<ProfileContainer />} />
            <Route
              path="messages/:id"
              element={<DialogueContainer />} />
            {/* <Route path="messages/:id" element={<Dialogue dialogsPage={state.dialogsPage} dispatch={dispatch} store={store} />} /> */}
            <Route path={PATH.MESSAGES} element={<Messenger />} />
            <Route path={PATH.USERS} element={<UsersList />} />
            <Route path={"/*"} element={<Error message={'Not found'} />} />
            <Route path={"messages/*"} element={<Error message={'Not found'} />} />
            {/* <Route path={PATH.ERROR} element={<Error />} />
          <Route path={"/*"} element={<Navigate to={PATH.ERROR} />} /> */}
          </Routes>
          {/* <Footer/> */}
          {/* <Content /> */}
        </MainContent>
      </Container>
    </BrowserRouter >
  );
}
