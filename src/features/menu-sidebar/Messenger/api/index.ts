
//types
import { ChatMessage } from "../../../../common/types/messages";

type SubscriberType = (messages: ChatMessage[]) => void;

let subscribers = [] as SubscriberType[];

let ws: WebSocket;

const handleCloseConnection = () => {
	setTimeout(createWsChanel, 3000);
}

const createWsChanel = () => {
	//если было старое соединение перед созданием нового - к примеру после разрыва соединения через 3 секунды
	ws?.removeEventListener('close', handleCloseConnection);
	ws?.close();
	ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
	ws?.addEventListener('close', handleCloseConnection);
}

const handleSendMessage = (event: MessageEvent) => {
	const messages = JSON.parse(event.data);
	subscribers.forEach((subscriber) => subscriber(messages));
}

export const ChatApi = {
	subscribe: (callback: SubscriberType) => {
		subscribers.push(callback);
		return () => {
			subscribers = subscribers.filter(s => s !== callback);
		}
	},
	unsubscribe: (callback: SubscriberType) => {
		subscribers = subscribers.filter(s => s !== callback);
	}
}