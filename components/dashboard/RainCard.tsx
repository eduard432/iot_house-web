import BoolCard from './BoolCard'
import { CloudHail, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSensorData } from '../providers/data-provider'

type RainCardProps = {
    sensor_device_id: number
}

const RainCard = ({sensor_device_id}: RainCardProps) => {
		const isRaining = useSensorData(sensor_device_id)
	
	return (
		<BoolCard
            className={cn(isRaining >= 1 ? 'bg-blue-800' : 'bg-lime-700')}
			ActivateIcon={CloudHail}
            DeactivateIcon={Sun}
			isActivate={isRaining >= 1 }
			title={isRaining >= 1  ? "Lluvia" : "Soleado"}
		/>
	)
}

export default RainCard
