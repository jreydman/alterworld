'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ToastAction } from '@radix-ui/react-toast'
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'src/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from 'src/components/ui/form'
import { Input } from 'src/components/ui/input'
import { Toaster } from 'src/components/ui/toaster'
import { useToast } from 'src/components/ui/use-toast'
import { cn } from 'src/lib/utils'
import zod from 'zod'

const formSchema = zod
	.object({
		email: zod.string().email(),
		password: zod.string(),
	})
	.refine(data => true)

const AuthPage: React.FC<Readonly<{}>> = () => {
	const authForm = useForm<zod.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const { toast } = useToast()

	useEffect(() => {
		if (document.cookie) return redirect('/profile')
	}, [])

	const submitHandler = async data => {
		const response = await fetch('/proxy/api/v1/auth/signin/provider/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		const responseData = await response.json()
		if (!response.ok)
			return toast({
				variant: 'destructive',
				title: 'Unauthorized',
				description: responseData.message,
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			})
		redirect('/profile')
	}

	return (
		<>
			<header></header>
			<main>
				<Form {...authForm}>
					<Toaster />
					<form
						onSubmit={authForm.handleSubmit(submitHandler)}
						className={cn('max-w-md w-full flex flex-col gap-4')}
					>
						<FormField
							control={authForm.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email Address:</FormLabel>
									<FormControl>
										<Input placeholder="example@host.local" type="email" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={authForm.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password:</FormLabel>
									<FormControl>
										<Input placeholder="password" type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</main>
			<footer></footer>
		</>
	)
}

export default AuthPage
