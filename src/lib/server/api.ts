import { getRequestEvent } from './request-context';

export async function someApiCall() {
	const event = getRequestEvent();
	const response = await event.fetch('/test?name=' + event.locals.name);
	const json = await response.json();
	return json.name;
}
