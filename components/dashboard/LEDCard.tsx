import { useState } from 'react'

import { Lightbulb, LightbulbOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import SwitchCard from './SwitchCard'
import { useLedStates } from '../providers/data-provider'

type LEDCardProps = {
	title?: string
	device_id: number
	LEDIndex: number
}
const LEDCard = ({ title = 'Luz', LEDIndex, device_id }: LEDCardProps) => {
	const isOnState = useLedStates(LEDIndex)
	const [isLoading, setIsLoading] = useState(false)

	const setLED = async () => {
		if (isLoading) return
		setIsLoading(true)

		const body = JSON.stringify({
			device_id: device_id,
			command: isOnState ? 'turn_off' : 'turn_on',
			value: `${LEDIndex}`,
			issued_by: 'frontend',
		})

		console.log({body})

		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/actuators/commands`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body,
				}
			)

			if (!response.ok) {
				throw new Error('Error al enviar comando')
			}

			await new Promise((resolve) => setTimeout(resolve, 6000))
		} catch (error) {
			console.error('Error:', error)
			setIsLoading(false)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<SwitchCard
			disabled={isLoading}
			ActivateIcon={Lightbulb}
			DeactivateIcon={LightbulbOff}
			isActivate={isOnState}
			onClick={() => setLED()}
			className={cn(isOnState ? 'bg-yellow-500' : 'bg-card')}
			title={title}
		/>
	)
}

export default LEDCard
