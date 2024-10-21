import { json } from '@sveltejs/kit';

export function GET({ url }) {
	return json({ name: url.searchParams.get('name') });
}
