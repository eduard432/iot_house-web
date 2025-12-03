import { Dispatch, JSX, ReactElement, SetStateAction, useState } from 'react'
import {
	Card,
	CardContent,
	CardHeader,
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
	setIsActivate: Dispatch<SetStateAction<boolean>>
}

const SwitchCard = ({
	title,
	ActivateIcon,
	DeactivateIcon,
	className,
	isActivate,
	setIsActivate,
}: SwitchCardProps) => {
	return (
		<Card
			className={cn(
				'cursor-pointer select-none flex items-center justify-center',
				className
			)}
			onClick={() => setIsActivate((state) => !state)}
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
