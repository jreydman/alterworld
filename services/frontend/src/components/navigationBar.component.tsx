'use client'

import { Icon } from '@phosphor-icons/react/dist/lib/types'
import { Activity, Cards, UserCheck } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { cn } from 'src/lib/utils'

const NavigationItem: React.FC<Readonly<{ href?: string; title?: string; icon?: Icon }>> = ({
	href = '/',
	icon: Icon,
	title = '',
}) => (
	<Link
		className={cn(
			`transition-transform hover:text-accent text-center group sm:inline-flex flex flex-col sm:flex-row items-center gap-x-2 py-4 px-8 border-b-2 border-card/25 hover:border-accent`
		)}
		href={href}
	>
		{Icon ? <Icon size={32} /> : null}
		<span className="absolute group-hover:block hidden sm:static -mt-10 sm:mt-0 center sm:mb-0 sm:block ">
			{title}
		</span>
	</Link>
)

const NavigationBar: React.FC<Readonly<{}>> = () => (
	<nav className="fixed bottom-0 sm:static bg-card flex justify-evenly md:justify-center items-center md:float-right md:rounded-s-full md:px-10 mb-0 md:mb-8 w-full md:max-w-fit">
		<NavigationItem title="Dashboard" icon={Cards} />
		<NavigationItem title="Workmap" icon={Activity} />
		<NavigationItem title="Aboud" icon={UserCheck} />
	</nav>
)

export default NavigationBar
