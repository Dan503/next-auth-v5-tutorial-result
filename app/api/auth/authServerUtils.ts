import { Session } from 'next-auth'

/** Remove sensitive info from user data that should not be made public */
export function publifyUserData<T extends Session | null>(session: T): T {
	const safeSession = (session ? { ...session } : null) as T

	if (safeSession && safeSession.user) {
		// white list of values considered safe to be made public
		const { name, email } = safeSession.user
		safeSession.user = { name, email }
	}

	return safeSession
}
