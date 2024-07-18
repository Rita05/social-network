import React, {
	ChangeEvent,
	DetailedHTMLProps,
	InputHTMLAttributes,
} from 'react'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
	onChangeChecked?: (checked: boolean) => void
	spanClassName?: string
}

export const Checkbox: React.FC<SuperCheckboxPropsType> = (
	{
		onChange,
		className,
		spanClassName,
		children,
		id,
		...restProps
	}
) => {
	const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
	}


	return (
		<label>
			{children && (
				<span
					id={id ? id + '-span' : undefined}
				>
					{children}
				</span>
			)}
			<input
				id={id}
				type={'checkbox'}
				onChange={onChangeCallback}
				className={className}
				{...restProps}
			/>
		</label>
	)
}

