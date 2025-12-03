import ValueCard from './ValueCard'
import { Droplet } from 'lucide-react'

type HumidtyCardProps = {
	sensor_device_id: number
}

const HumidityCard = ({}: HumidtyCardProps) => {
	return (
		<ValueCard title="Humedad">
			<Droplet className="w-10 h-10" />
			<p className="text-5xl">53%</p>
		</ValueCard>
	)
}

export default HumidityCard
