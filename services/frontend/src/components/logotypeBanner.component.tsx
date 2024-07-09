import { GitBranch } from '@phosphor-icons/react/dist/ssr'
import { Bebas_Neue } from 'next/font/google'
import { cn } from 'src/lib/utils'

const font = Bebas_Neue({
	variable: '--font-sans',
	weight: '400',
})

const LogotypeBanner: React.FC<Readonly<{}>> = () => (
	<div className="inline-flex items-end">
		<h1 className={cn(`text-6xl ${font.className} bg-clip-text text-transparent bg-logotype-texture bg-cover`)}>
			Alterworld
		</h1>
		<span className="bg-constructive inline-flex items-center">
			[<GitBranch />
			]master/
		</span>
	</div>
)

export default LogotypeBanner
