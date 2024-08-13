'use client'
import { useEffect, useState } from 'react'

export function ClientComponentUsingFetchAPI() {
	const [user, setUser] = useState<string | null>()

	useEffect(() => {
		fetch('/api/whoAmI')
			.then((res) => res.json())
			.then(({ user }) => setUser(user))
	}, [])

	return <p>Who am I? (client api fetch): {user}</p>
}
