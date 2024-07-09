'use client'
import React, { useEffect, useState } from 'react'
import ReactRain from 'react-rain-animation'
import { TypeAnimation } from 'react-type-animation'
import styles from 'src/assets/styles/indexPage.module.css'
import CopyrightBanner from 'src/components/copyrightBanner.component'
import LogotypeBanner from 'src/components/logotypeBanner.component'
import { Button } from 'src/components/ui/button'
import { Card, CardContent, CardHeader } from 'src/components/ui/card'
import { Progress } from 'src/components/ui/progress'
import useMousePosition from 'src/lib/providers/useMousePosition'
import { cn } from 'src/lib/utils'

const commandlineEntryTempl = [
	'Server started on port 3000',
	'Database connected successfully',
	'GET\trequest received at /api/users',
	'POST\trequest received at /api/users',
	'User authenticated successfully',
	'Error\tUnable to connect to database',
	'Warning\tHigh memory usage detected',
	'Info\tServer uptime is 24 hours',
]

const HomePage: React.FC<Readonly<{}>> = () => {
	const [commandlineEntries, setCommandlineEntries] = useState(
		new Array(3).fill(null).map(() => <TypeAnimation key={Math.random()} cursor={false} sequence={['']} />)
	)
	const [progressLine, setProgressLine] = useState(0)
	const [isSubmited, setIsSubmited] = useState(false)
	const mousePosition = useMousePosition()

	useEffect(() => {
		const interval = setInterval(
			() =>
				setCommandlineEntries(prevState => {
					const commandlineEntry =
						commandlineEntryTempl[Math.floor(Math.random() * commandlineEntryTempl.length)]
					let newState = [...prevState]
					const getSequenceOrSelf = entry => (entry.props ? entry.props.sequence[0] ?? entry : entry)
					if (newState.length >= 3) newState = newState.map(getSequenceOrSelf).slice(1)
					if (progressLine < 100)
						setProgressLine(prevState => {
							const increment = Math.floor(Math.random() * 10) + 1
							return Math.min(prevState + increment, 100)
						})

					newState.push(<TypeAnimation key={commandlineEntry} cursor={false} sequence={[commandlineEntry]} />)
					return newState
				}),
			2000
		)
	}, [])

	useEffect(() => {
		if (isSubmited) {
			document.documentElement.style.removeProperty('--movePos-x')
			document.documentElement.style.removeProperty('--movePos-y')
			return
		}
		const x = (mousePosition.y - window.innerWidth / 2) * -0.005
		const y = (mousePosition.x - window.innerHeight / 2) * -0.01
		document.documentElement.style.setProperty('--movePos-x', `${x}deg`)
		document.documentElement.style.setProperty('--movePos-y', `${y}deg`)
	}, [mousePosition])

	const dashboardSectionRef = React.useRef<HTMLDivElement>(null)

	const submitHandler = () => {
		dashboardSectionRef.current?.classList.replace('hidden', styles.page__dashboard)
		dashboardSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
		setTimeout(() => {
			setIsSubmited(true)
		}, 1000)
	}

	return (
		<>
			<header className={cn(!isSubmited ? styles.page__section : 'hidden', styles.page__header)}></header>
			<main className={cn(!isSubmited ? styles.page__section : 'hidden', styles.page__main)}>
				<section className={cn(styles.main__layersContainer)}>
					<div className={cn(styles.main__layer, styles.layer__wallpaper)} />
					<div className={cn(styles.main__layer, styles.layer__rain)}>
						<ReactRain numDrops={20} />
					</div>
					<div className={cn(styles.main__layer, styles.layer__logotype)}>
						<LogotypeBanner />
					</div>
					<div className={cn(styles.main__layer, styles.layer__console)}>
						<div className={cn(styles.console)}>
							<span>workspace</span>
							<ul>
								{commandlineEntries.map((commandlineEntry, index) => (
									<li key={index}>{commandlineEntry}</li>
								))}
							</ul>
						</div>
						<Progress value={progressLine} className={styles.console__progressBar} />
					</div>
					<div className={cn(styles.main__layer, styles.layer__submitBar)}>
						<Button
							aria-label="Dashboard"
							variant={progressLine != 100 ? `secondary` : `default`}
							disabled={progressLine != 100}
							onClick={submitHandler}
						/>
					</div>
				</section>
			</main>
			<footer className={cn(!isSubmited ? [styles.page__section, styles.page__footer] : 'hidden')}>
				<CopyrightBanner />
			</footer>
			<div ref={dashboardSectionRef} className={cn(styles.page__section, 'hidden')}>
				<Card className={cn('w-full h-full')}>
					<CardHeader>Dashboard</CardHeader>
					<CardContent>contend</CardContent>
				</Card>
			</div>
		</>
	)
}

export default HomePage
