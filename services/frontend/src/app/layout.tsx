import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import 'react-rain-animation/lib/style.css'
import 'src/assets/styles/globals.css'

import { cn } from 'src/lib/utils'

const font = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'ALW[workspace]',
	description: 'Powerful, flexible, and scalable workspace for developers.',
}

const RootLayout: React.FC<Readonly<{ children: React.ReactNode }>> = ({ children }) => (
	<html lang="en">
		<body className={cn('dark font-sans antialiased', font.variable)}>{children}</body>
	</html>
)

export default RootLayout
