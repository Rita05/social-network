import { Dispatch } from "redux";

// generic function

export const handleServerAppError = <T,>(
    dispatch: Dispatch,
    data: any
) => {
    // if (data.messages.length) {
    //     dispatch(setErrorAction(data.messages[0]));
    // } else {
    //     dispatch(setErrorAction('Something went wrong'));
    // }
    // dispatch(setAppStatusAction('failed'));

}

export const handleServerNetworkError = (
    error: { message: string },
    dispatch: Dispatch
) => {
    console.log(error);
    // dispatch(setErrorAction(error.message))
    // dispatch(setAppStatusAction('failed'))
}

