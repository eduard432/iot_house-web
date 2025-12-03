import React, { useState } from 'react'
import BoolCard from './BoolCard'
import { CarFront, CloudHail, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

type RainCardProps = {
    device_id: number
}

const RainCard = ({}: RainCardProps) => {
	const [isRaining, setIsRaining] = useState(false)
	return (
		<BoolCard
            className={cn(isRaining ? 'bg-blue-800' : 'bg-lime-700')}
			ActivateIcon={CloudHail}
            DeactivateIcon={Sun}
			isActivate={isRaining}
			title={isRaining ? "Lluvia" : "Soleado"}
		/>
	)
}

export default RainCard
