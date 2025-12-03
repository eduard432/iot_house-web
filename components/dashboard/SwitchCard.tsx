import { MouseEventHandler } from 'react'
import {
	Card,
	CardTitle,
} from '@/components/ui/card'

import { type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type SwitchCardProps = {
	title?: string
	ActivateIcon: LucideIcon
	DeactivateIcon?: LucideIcon
	className?: string
	isActivate: boolean
	onClick: MouseEventHandler<HTMLDivElement>
	disabled?: boolean
}

const SwitchCard = ({
	title,
	ActivateIcon,
	DeactivateIcon,
	className,
	isActivate,
	onClick,
	disabled = false
}: SwitchCardProps) => {
	return (
		<Card
			className={cn(
				'select-none flex items-center justify-center',
				disabled ? 'cursor-auto opacity-60' : 'cursor-pointer',
				className
			)}
			onClick={onClick}
		>
			<CardTitle>{title}</CardTitle>

			<div className=" border border-foreground rounded-full p-4">
				{isActivate ? (
					<ActivateIcon className="w-10 h-10" />
				) : (
					DeactivateIcon && <DeactivateIcon className="w-10 h-10" />
				)}
			</div>
		</Card>
	)
}

export default SwitchCard
