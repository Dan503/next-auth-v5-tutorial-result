import { headers } from 'next/headers'

export async function ServerComponentUsingFetchAPI() {
	const { user } = await fetch('http://localhost:3000/api/whoAmI', {
		method: 'GET',
		headers: headers(),
	}).then((res) => res.json())

	return <p>Who am I? (Server Component using fetch): {user}</p>
}
