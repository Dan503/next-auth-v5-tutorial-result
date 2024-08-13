'use client'

import { useEffect, useState } from 'react'
import { getUserServerAction } from './serverActionFile'

interface Props {
	getUser: () => Promise<string | null>
}

export function ClientComponentUsingServerActionProp({ getUser }: Props) {
	const [user, setUser] = useState<string | null>()

	useEffect(() => {
		getUser().then((user) => setUser(user))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return <p>Who am I? (server action prop): {user}</p>
}

export function ClientComponentUsingServerActionFile() {
	const [user, setUser] = useState<string | null>()

	useEffect(() => {
		getUserServerAction().then((user) => setUser(user))
	}, [])

	return <p>Who am I? (server action file): {user}</p>
}
