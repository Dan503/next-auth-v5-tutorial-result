'use client'

import { useSession } from 'next-auth/react'
import { signIn, signOut } from '../authServerActions'

export function AuthButtonClient() {
	const session = useSession()

	if (session.data?.user) {
		return (
			<button
				onClick={async () => {
					await signOut()
					await signIn()
				}}
			>
				{session.data.user.name} | Sign Out
			</button>
		)
	}

	return <button onClick={() => signIn()}>Sign In</button>
}
