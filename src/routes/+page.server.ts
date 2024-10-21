import { someApiCall } from '$lib/server/api';

export async function load() {
	const name = await someApiCall();
	return { name };
}
