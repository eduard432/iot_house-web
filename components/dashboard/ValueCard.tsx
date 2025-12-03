import { PropsWithChildren, useState } from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

import { cn } from '@/lib/utils'

type ValueCardProps = {
	title?: string
}

const ValueCard: React.FC<PropsWithChildren<ValueCardProps>> = ({
	title = 'Temperatura:',
    children
}) => {
	return (
		<Card className={cn(' select-none')}>
			<CardHeader>
				<CardTitle className="text-center">{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex items-center justify-center h-12">
				<div className="flex items-end">
					{children}
				</div>
			</CardContent>
		</Card>
	)
}

export default ValueCard
