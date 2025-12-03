import BoolCard from './BoolCard'
import { CarFront } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSensorData } from '../providers/data-provider'

type CarCardProps = {
    sensor_device_id: number
}

const CarCard = ({sensor_device_id}: CarCardProps) => {

	const isCar = useSensorData(sensor_device_id)
	

	return (
		<BoolCard
            className={cn(isCar != 0 ? 'bg-slate-500' : 'bg-card')}
			ActivateIcon={CarFront}
            DeactivateIcon={CarFront}
			isActivate={isCar != 0}
			title="Auto garage"
		/>
	)
}

export default CarCard
