
//components
import { useState } from "react";
import { SelectOption, SingleSelectValue } from "../../../elements/ui/select/Select";

//styles
import { UsersListSelect } from "./UsersList.styled";

const usersStatus = {
	all: 'Все',
	followed: 'Подписанный',
	unfollowed: 'Неподписанный'
}

export const UsersList = () => {
	const [selectedUsersStatus, setSelectedUsersStatus] = useState('');
	console.log('selectedUsersStatus: ', selectedUsersStatus);

	const usersStatusOptions = Object.entries(usersStatus).map(([key, value]) => ({
		label: key,
		value
	}));

	const handleUsersStatusChange = (value: SingleSelectValue) => {
		value && setSelectedUsersStatus(String(value));
	}

	return (
		<>
			<UsersListSelect
				value={selectedUsersStatus}
				onChange={(option: SelectOption) => handleUsersStatusChange(option?.value)}
				options={usersStatusOptions}
			// options={[
			// 	{ title: 'Moscow', value: 'Moscow' },
			// 	{ title: 'Rostov', value: 'Rostov' },
			// 	{ title: 'Vologda', value: 'Vologda' }
			// ]}
			/>
		</>
	)
}