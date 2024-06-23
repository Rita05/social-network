import { ChangeEvent, Component } from "react";

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

export class ProfileStatus extends Component<ProfileStatusPropsType, ProfileStatusStateType> {

  constructor(props: ProfileStatusPropsType) {
    super(props);
  }

  state: ProfileStatusStateType = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType): void {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }

  }

  toggleEditMode = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode
    }));
  }

  handleBlur = () => {
    this.toggleEditMode();
    this.props.updateProfileStatus(this.state.status);
  }

  handleStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: event.currentTarget.value });
    // const newStatus = event.currentTarget.value;
    // this.setState({ status: newStatus });
  }

  render() {
    return (
      <>
        {
          !this.state.editMode
            ? (
              <UserStatusText
                onDoubleClick={this.toggleEditMode}
              >
                {this.state.status || '---'}
              </UserStatusText>
            )
            : (
              <UserStatusInput
                value={this.state.status}
                placeholder={"Изменить статус"}
                autoFocus
                onBlur={this.handleBlur}
                onChange={this.handleStatusChange}
              />
            )
        }

      </>

    )
  }
}
