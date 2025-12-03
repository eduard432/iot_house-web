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
	children,
}) => {
	return (
		<Card className={cn('select-none flex items-center justify-center')}>
			<CardTitle className="text-center">{title}</CardTitle>
			<div className="flex items-end">{children}</div>
		</Card>
	)
}

export default ValueCard
