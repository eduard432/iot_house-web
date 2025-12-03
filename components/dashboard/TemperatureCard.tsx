import ValueCard from './ValueCard'
import { Thermometer } from 'lucide-react'

type TemperatureCardProps = {
	sensor_device_id: number
}

const TemperatureCard = ({}: TemperatureCardProps) => {
	return (
		<ValueCard title="Temperatura">
			<Thermometer className="w-10 h-10" />
			<p className="text-5xl">12°</p>
		</ValueCard>
	)
}

export default TemperatureCard
