import { handle as RequestContextHandle } from '$lib/server/request-context';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const someOtherHandleHook = (({ event, resolve }) => {
	event.locals.name = 'TEST';
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(RequestContextHandle, someOtherHandleHook);
