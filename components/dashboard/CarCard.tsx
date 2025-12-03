import React, { useState } from 'react'
import BoolCard from './BoolCard'
import { CarFront } from 'lucide-react'
import { cn } from '@/lib/utils'

type CarCardProps = {
    device_id: number
}

const CarCard = ({}: CarCardProps) => {
	const [isCard, setIsCard] = useState(true)
	return (
		<BoolCard
            className={cn(isCard ? 'bg-slate-500' : 'bg-card')}
			ActivateIcon={CarFront}
            DeactivateIcon={CarFront}
			isActivate={isCard}
			title="Auto garage"
		/>
	)
}

export default CarCard
