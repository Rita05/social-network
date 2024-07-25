import { ChatMessage } from "../../../../common/types/messages";

const SEND_MESSAGE = 'SEND_MESSAGE';
const MESSAGES_RECEIVED = 'MESSAGES/MESSAGES-RECEIVED';
export type SendMessageActionType = ReturnType<typeof sendMessageAction>;
export type MessagesReceivedActionType = ReturnType<typeof messagesReceived>;

export const sendMessageAction = (newDialogueMessage: string) => ({ type: SEND_MESSAGE, newDialogueMessage }) as const;
export const messagesReceived = (messages: ChatMessage[]) => ({type: MESSAGES_RECEIVED, payload: {messages}}) as const;

