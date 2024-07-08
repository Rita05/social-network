
export type DialogMessagesType = {
    id: number,
    message: string,
    time: string
}

export type DialogsPropsType = {
    id: number,
    name: string,
    avatar: string,
    messages: Array<DialogMessagesType>
}