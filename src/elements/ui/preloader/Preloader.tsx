import React from 'react';
import { RuleSet } from 'styled-components';

//icons 
import spinnerIcon from '../../../assets/icons/spinner.svg';

//styles
import { PreloaderIcon } from "./Preloader.styled";

type PreloaderPropsType = {
	className?: RuleSet<object> | string
}

export const Preloader = (props: PreloaderPropsType) => {
	const {
		className,
		...rest
	} = props
	return (
		<PreloaderIcon src={spinnerIcon} customStyles={className} />
	)
}

