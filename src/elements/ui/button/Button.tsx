import { ButtonHTMLAttributes, DetailedHTMLProps, MouseEvent, ReactNode } from "react"

//styles
import { StyledButton } from "./Button.styled"


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    isDisabled?: boolean,
}

export const Button = (props: ButtonPropsType) => {
    const {
        onClick,
        isDisabled,
        className,
        ...restProps
    } = props;
    return (
        <StyledButton
            className={className}
            onClick={onClick}
            disabled={isDisabled}
            {...restProps}
        />
    )

}