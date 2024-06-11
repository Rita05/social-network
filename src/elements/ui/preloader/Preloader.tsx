import React from 'react';

//icons 
import spinnerIcon from '../../../assets/icons/spinner.svg';

//styles
import { PreloaderIcon } from "./Preloader.styled";

type PreloaderPropsType = {
	className?: string
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

