import { SessionProvider } from 'next-auth/react'
import { auth, BASE_PATH } from '../authConfig'
import { publifyUserData } from '../authServerUtils'
import { AuthButtonClient } from './AuthButton.client'

export async function AuthButton() {
	const session = await auth()

	const safeSession = publifyUserData(session)

	return (
		<SessionProvider basePath={BASE_PATH} session={safeSession}>
			<AuthButtonClient />
		</SessionProvider>
	)
}
