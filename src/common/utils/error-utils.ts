import { AnyAction, Dispatch } from "redux";
import { setAppErrorAction, SetAppErrorActionType } from "../../app/model/app-actions";
import { setRequestStatusAction, SetRequestStatusActionType } from "../../models/actions";
import { ApiResponseType } from "../api/common-api";

// generic function
export const handleServerAppError = <T> (
    dispatch: Dispatch<SetAppErrorActionType| SetRequestStatusActionType>,
    data: ApiResponseType<T>
) => {
    if (data.messages.length) {
      console.log('data.messages: ', data.messages);
      dispatch(setAppErrorAction(data.messages))
    } else {
      dispatch(setAppErrorAction('Some error occurred'))
    }
    dispatch(setRequestStatusAction('failed'))

}

export const handleServerNetworkError = (
    error: Error,
    dispatch: Dispatch<SetAppErrorActionType| SetRequestStatusActionType>
) => {
    console.log(error);
    dispatch(setAppErrorAction(error.message ? error.message : 'Some error occurred'))
    dispatch(setRequestStatusAction('failed'))
}
