export const requiredField = (value: string | number) => {
	if (value) {
		return undefined;
	}
	return 'Заполните поле';
}

export const validateFieldLength = (maxLength: number) => (value: string) => {
	if (value?.length > maxLength) return 'Не более 30 символов';

	return undefined;
}
