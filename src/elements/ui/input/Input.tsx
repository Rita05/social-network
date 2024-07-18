import React, { ChangeEvent, KeyboardEvent, FocusEvent, RefObject } from 'react';

type InputPropsType = {
	inputRef?: RefObject<HTMLInputElement>,
	placeholder?: string,
	value?: string,
	className?: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
	onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void,
	onBlur?: (event: FocusEvent<HTMLInputElement>) => void
	autoFocus?: boolean
	type?: string
	name?: string
}

export const Input = (props: InputPropsType) => {
	const {
		type,
		inputRef,
		className,
		placeholder,
		value,
		onChange,
		onKeyUp,
		onBlur,
		name,
		autoFocus
	} = props;
	return (
		<input
			name={name}
			type={type}
			className={className}
			placeholder={placeholder}
			ref={inputRef}
			value={value}
			onChange={onChange}
			onKeyUp={onKeyUp}
			onBlur={onBlur}
			autoFocus
		/>
	)
}
