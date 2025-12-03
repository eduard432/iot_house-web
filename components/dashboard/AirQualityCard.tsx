import ValueCard from './ValueCard'
import { AlarmSmoke } from 'lucide-react'

type AirQualityCardProps = {
	sensor_device_id: number
}

const AirQualityCard = ({}: AirQualityCardProps) => {
	return (
		<ValueCard title="Calidad del Aire">
			<p className="text-5xl text-red-700">10</p>
            <p className="text-sm" >ppm</p>
		</ValueCard>
	)
}

export default AirQualityCard
