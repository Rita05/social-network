const SEND_MESSAGE = 'SEND_MESSAGE';

export type SendMessageActionType = ReturnType<typeof sendMessageAction>;

export const sendMessageAction = (newDialogueMessage: string) => ({ type: SEND_MESSAGE, newDialogueMessage }) as const;

