import { auth } from '../api/auth/authConfig'

export default async function TestRoute() {
	const session = await auth()

	return (
		<main>
			<h1>Test Route</h1>
			<p>User: {session?.user?.name}</p>
		</main>
	)
}
