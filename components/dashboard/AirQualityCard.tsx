import { useSensorData } from '../providers/data-provider'
import ValueCard from './ValueCard'

type AirQualityCardProps = {
	sensor_device_id: number
}

const AirQualityCard = ({sensor_device_id}: AirQualityCardProps) => {

	const airQuality = useSensorData(sensor_device_id)

	return (
		<ValueCard title="Calidad del Aire">
			<p className="text-5xl text-red-700">{Math.floor(airQuality)}</p>
            <p className="text-sm" >ppm</p>
		</ValueCard>
	)
}

export default AirQualityCard
