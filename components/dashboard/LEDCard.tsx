import { useState } from 'react'

import { Lightbulb, LightbulbOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import SwitchCard from './SwitchCard'

type LEDCardProps = {
    title?: string,
    device_id: number,
}
const LEDCard = ({title = "Luz"}: LEDCardProps) => {
	const [isOn, setIsOn] = useState(false)

	return (
		<SwitchCard
			ActivateIcon={Lightbulb}
			DeactivateIcon={LightbulbOff}
			isActivate={isOn}
			setIsActivate={setIsOn}
			className={cn(isOn ? 'bg-yellow-500' : 'bg-card')}
			title={title}
		 />
	)
}

export default LEDCard
