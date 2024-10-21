import type { Handle, RequestEvent } from '@sveltejs/kit';
import { AsyncLocalStorage } from 'node:async_hooks';

const storage = new AsyncLocalStorage<RequestEvent>();

export const handle = (({ event, resolve }) => storage.run(event, resolve, event)) satisfies Handle;

export function getRequestEvent() {
	const event = storage.getStore();
	if (!event) throw new Error('Used "getRequestEvent()" outside of async local storage context');
	return event;
}
