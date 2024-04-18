'use client'
import { Session } from 'next-auth'
import { SessionProvider as Provider } from 'next-auth/react'

type Props = {
    children: React.ReactNode;
    session: Session | null;
}
// session 
export default function SessionProvider({ children, session}: Props) {
    return (
        // <html class name="en" lang="en">
            <Provider>
                {children}
            </Provider>
        // </html>
    )
}
