import NextAuth, { NextAuthConfig } from 'next-auth'
import credentials from 'next-auth/providers/credentials'

export const BASE_PATH = '/api/auth'

interface User {
	id: string
	userName: string
	name: string
	password: string
	email: string
}

const authOptions: NextAuthConfig = {
	providers: [
		credentials({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'Dan',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials): Promise<User | null> {
				const users: Array<User> = [
					{
						id: 'one',
						userName: 'test1',
						name: 'Test 1',
						email: 'test1@nonotreply.com',
						password: 'pass',
					},
					{
						id: 'two',
						userName: 'test2',
						name: 'Test 2',
						email: 'test2@nonotreply.com',
						password: 'pass',
					},
					{
						id: 'three',
						userName: 'test3',
						name: 'Test 3',
						email: 'test3@nonotreply.com',
						password: 'pass',
					},
				]

				return (
					users.find(
						(u) =>
							u.userName === credentials.username &&
							u.password === credentials.password,
					) || null
				)
			},
		}),
	],
	basePath: BASE_PATH,
	secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
