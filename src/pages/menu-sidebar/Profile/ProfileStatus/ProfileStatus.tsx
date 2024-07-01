import { ChangeEvent, Component, useState } from "react";

//styles
import { UserStatusText, UserStatusInput } from "./ProfileStatus.styled";

type ProfileStatusPropsType = {
  status: string
  updateProfileStatus: (status: string) => void
}

type ProfileStatusStateType = {
  editMode: boolean
  status: string
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const { updateProfileStatus } = props;
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState('');

  // constructor(props: ProfileStatusPropsType) {
  //   super(props);
  // }

  // state: ProfileStatusStateType = {
  //   editMode: false,
  //   status: this.props.status
  // }

  // componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType): void {
  //   if(prevProps.status !== this.props.status) {
  //   this.setState({
  //     status: this.props.status
  //   });
  // }

  // }

  const toggleEditMode = () => {
    setEditMode(!editMode);
    // this.setState((prevState) => ({
    //   editMode: !prevState.editMode
    // }));
  }

  const handleBlur = () => {
    toggleEditMode();
    updateProfileStatus(status);
  }

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value);
    // this.setState({ status: event.currentTarget.value });
    // const newStatus = event.currentTarget.value;
    // this.setState({ status: newStatus });
  }


  return (
    <>
      {
        !editMode
          ? (
            <UserStatusText
              onDoubleClick={toggleEditMode}
            >
              {status || '---'}
            </UserStatusText>
          )
          : (
            <UserStatusInput
              value={status}
              placeholder={"Изменить статус"}
              autoFocus
              onBlur={handleBlur}
              onChange={handleStatusChange}
            />
          )
      }

    </>
  )
}
