import { NextResponse } from 'next/server'
import { auth, BASE_PATH } from './app/api/auth/authConfig'

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

export default auth((request) => {
	const reqUrl = new URL(request.url)
	if (!request.auth && reqUrl.pathname !== '/') {
		return NextResponse.redirect(
			new URL(
				`${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(
					reqUrl.pathname,
				)}`,
				request.url,
			),
		)
	}
})
