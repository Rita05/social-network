import { RefObject, useEffect } from "react";

export const useOutsideClick = (
	ref: RefObject<HTMLElement>,
	callback: (arg: MouseEvent | TouchEvent) => void,
) => {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (ref) {
				if (!ref.current || ref.current.contains(event.target as Node || null)) {
					return;
				}

				callback(event);
			}
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, callback])
}



