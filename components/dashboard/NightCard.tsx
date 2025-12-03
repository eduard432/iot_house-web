import React, { useState } from 'react'
import BoolCard from './BoolCard'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

type NightCardProps = {
    device_id: number
}

const NightCard = ({}: NightCardProps) => {
	const [isNight, setIsNight] = useState(false)
	return (
		<BoolCard
            className={cn(isNight ? 'bg-slate-900' : 'bg-amber-700')}
			ActivateIcon={Moon}
            DeactivateIcon={Sun}
			isActivate={isNight}
			title={isNight ? "Noche" : "Día"}
		/>
	)
}

export default NightCard
