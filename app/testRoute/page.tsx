import { auth } from '../api/auth/authConfig'
import {
	ClientComponentUsingServerActionFile,
	ClientComponentUsingServerActionProp,
} from './ClientComponentUsingServerAction'
import { ClientComponentUsingFetchAPI } from './ClientComponentUsingFetchAPI'

export default async function TestRoute() {
	const session = await auth()

	async function getUserServerAction() {
		'use server'
		const session = await auth()
		return session?.user?.name ?? null
	}

	return (
		<main>
			<h1>Test Route</h1>
			<p>User: {session?.user?.name}</p>
			<ClientComponentUsingServerActionProp
				getUser={getUserServerAction}
			/>
			<ClientComponentUsingServerActionFile />
			<ClientComponentUsingFetchAPI />
		</main>
	)
}
