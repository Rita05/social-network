
//styles
import { StyledContent } from "./Error.styled"

interface ErrorPropsType {
    message: string
}

export const Error = (props: ErrorPropsType) => {
    const { message } = props;
    return (
        <StyledContent>{message}</StyledContent>
    )
}