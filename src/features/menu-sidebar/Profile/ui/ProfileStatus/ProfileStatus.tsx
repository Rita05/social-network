import { ChangeEvent, useEffect, useState } from "react";


import { updateUserProfileStatus } from "../../model/profile-reducer";
import { useAppDispatch } from "../../../../../app/store";

//styles
import { UserStatusText, UserStatusInput } from "./ProfileStatus.styled";

type ProfileStatusPropsType = {
  status: string
  updateProfileStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
  const { updateProfileStatus, status } = props;
  const [editMode, setEditMode] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentStatus(status);
  }, [status])

  const toggleEditMode = () => {
    setEditMode(!editMode);
    updateProfileStatus(status);
  }

  const handleBlur = () => {
    toggleEditMode();
    dispatch(updateUserProfileStatus(currentStatus));
  }

  const handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStatus(event.currentTarget.value);
  }


  return (
    <>
      {
        !editMode
          ? (
            <UserStatusText
              onDoubleClick={toggleEditMode}
            >
              {status || ''}
            </UserStatusText>
          )
          : (
            <UserStatusInput
              value={currentStatus}
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
