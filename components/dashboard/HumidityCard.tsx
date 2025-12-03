"use client"

import { useSensorData } from '../providers/data-provider'
import ValueCard from './ValueCard'
import { Droplet } from 'lucide-react'

type HumidtyCardProps = {
	sensor_device_id: number
}

const HumidityCard = ({sensor_device_id}: HumidtyCardProps) => {

	const humidity = useSensorData(sensor_device_id)

	return (
		<ValueCard title="Humedad">
			<Droplet className="w-10 h-10" />
			<p className="text-5xl">{Math.ceil(humidity)}%</p>
		</ValueCard>
	)
}

export default HumidityCard
