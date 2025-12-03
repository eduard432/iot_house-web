import { useState } from 'react'

import { DoorClosed, DoorOpen } from 'lucide-react'
import { cn } from '@/lib/utils'
import SwitchCard from './SwitchCard'

type GarageCardProps = {
    device_id: number,
}
const GarageCard = ({}: GarageCardProps) => {
	const [isOpen, setIsClose] = useState(false)

	return (
		<SwitchCard
			ActivateIcon={DoorOpen}
			DeactivateIcon={DoorClosed}
			isActivate={isOpen}
			setIsActivate={setIsClose}
			className={cn(isOpen ? 'bg-slate-800' : 'bg-card')}
			title={"Puerta garage"}
		 />
	)
}

export default GarageCard
