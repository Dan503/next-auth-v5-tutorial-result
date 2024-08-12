'use server'
import { serverSignIn, serverSignOut } from './authConfig'

/** This is now able to be used in client components as an edge function  */
export async function signIn() {
	await serverSignIn()
}

/** This is now able to be used in client components as an edge function  */
export async function signOut() {
	await serverSignOut()
}
