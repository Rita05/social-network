import { useState, KeyboardEvent, useEffect, useRef } from "react"
import { HtmlDivProps } from "../../../types/html"

//hooks
import { useOutsideClick } from "../../../hooks/useOutsideClick";

//icons
import dropDownArrow from '../../../assets/icons/arrow-down.svg';

//styles
import { DropDownArrow, StyledOption, StyledOptions, StyledSelect, StyledText } from "./Select.styled"


// type DefaultSelectPropsType = DetailedHTMLProps<
// 	SelectHTMLAttributes<HTMLSelectElement>,
// 	HTMLSelectElement
// >

type DefaultSelectPropsType = Omit<HtmlDivProps, 'style'>

export type SingleSelectValue = SelectOption['value'] | null;

export type SelectOption<TValue = string | number> = {
	/**
		* Значение опшина
		*/
	value: TValue,
	/**
		* Лейбл опшина
	*/
	label: string
}

type SelectPropsType = Omit<DefaultSelectPropsType, 'onChange'> & {
	value: any
	/**
	* Список опций
	*/
	options?: Array<SelectOption>
	/**
	* Можно ли выбрать несколько опций из списка
	** true - можно выбрать несколько опций в списке
	** false - можно выбрать только одну опцию
	*/
	multiple?: boolean
	onChange?: (option: SelectOption) => void
	className?: string
}

export const Select = (props: SelectPropsType) => {
	const {
		value,
		options,
		className,
		onChange: onOptionsChange,
		...restProps
	} = props;

	const [showDrop, setShowDrop] = useState(false);
	const [hoveredValue, setHoveredValue] = useState(value);

	const SelectedOption = options?.find(option => option.value === value);
	const HoveredOption = options?.find(option => option.value === hoveredValue);

	const selectContainer = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setHoveredValue(value);
	}, [value]);


	const handleCloseOptions = () => {
		setShowDrop(false)
	}


	useOutsideClick(selectContainer, handleCloseOptions);

	const handleDropShow = () => {
		setShowDrop(!showDrop);
	}

	const handleOptionChange = (option: SelectOption) => () => {
		onOptionsChange && onOptionsChange(option);
		handleDropShow();
	}

	const handleMouseEnter = (value: SingleSelectValue) => {
		setHoveredValue(value);
	}

	const handleOnKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		if (options) {
			if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
				for (let i = 0; i < options?.length; i++) {
					if (options[i].value === hoveredValue) {
						const compareOption = e.key === 'ArrowDown'
							? options[i + 1]
							: options[i - 1];
						if (compareOption && onOptionsChange) {
							onOptionsChange(compareOption);
							return;
						}
					}
				}
				if (!SelectedOption && onOptionsChange) {
					onOptionsChange && onOptionsChange(options[0]);
				}
			}

			if (e.key === 'Escape' || e.key === 'Enter') {
				setShowDrop(false);
			}

		}
	}

	return (
		<>
			{/* <select
			>
				<option value="">Moscow</option>
				<option value="">Rostov</option>
				<option value="">Vologda</option>
			</select> */}
			<StyledSelect ref={selectContainer} className={className} onKeyUp={handleOnKeyUp} tabIndex={0}>
				<StyledText onClick={handleDropShow}>
					{SelectedOption && SelectedOption.value}
				</StyledText>
				<DropDownArrow src={dropDownArrow} onClick={handleDropShow} />
				{showDrop &&
					<StyledOptions>
						{options?.map((option) => {
							const { label, value } = option;
							return (
								<StyledOption
									key={label}
									isSelected={HoveredOption === option}
									onClick={handleOptionChange(option)}
									onMouseEnter={() => handleMouseEnter(value)}
								>
									{value}
								</StyledOption>
							);
						})}
					</StyledOptions>
				}
			</StyledSelect>
		</>
	)
}