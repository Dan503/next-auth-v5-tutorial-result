'use server'

import { auth } from '../api/auth/authConfig'

export async function getUserServerAction() {
	const session = await auth()
	return session?.user?.name ?? null
}
