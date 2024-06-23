

// const CHANGE_DIALOGUE_MESSAGE = 'CHANGE_DIALOGUE_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

// export type СhangeDialogueMessageActionType = ReturnType<typeof changeDialogueMessageAction>;

export type SendMessageActionType = ReturnType<typeof sendMessageAction>;

// export const changeDialogueMessageAction = (newDialogueMessage: string) =>
//     ({ type: CHANGE_DIALOGUE_MESSAGE, newDialogueMessage }) as const;

export const sendMessageAction = (newDialogueMessage: string) => ({ type: SEND_MESSAGE, newDialogueMessage }) as const;