import BoolCard from './BoolCard'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSensorData } from '../providers/data-provider'

type NightCardProps = {
    sensor_device_id: number
}

const NightCard = ({sensor_device_id}: NightCardProps) => {

	const isNight = useSensorData(sensor_device_id)

	return (
		<BoolCard
            className={cn(isNight == 0 ? 'bg-slate-900' : 'bg-amber-700')}
			ActivateIcon={Moon}
            DeactivateIcon={Sun}
			isActivate={isNight == 0}
			title={isNight == 0 ? "Noche" : "Día"}
		/>
	)
}

export default NightCard
