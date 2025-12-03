"use client"

import { useSensorData } from '../providers/data-provider'
import ValueCard from './ValueCard'
import { Thermometer } from 'lucide-react'

type TemperatureCardProps = {
	sensor_device_id: number
}

const TemperatureCard = ({sensor_device_id}: TemperatureCardProps) => {
	const temperature = useSensorData(sensor_device_id)


	return (
		<ValueCard title="Temperatura">
			<Thermometer className="w-10 h-10" />
			<p className="text-5xl">{Math.floor(temperature)}°</p>
		</ValueCard>
	)
}

export default TemperatureCard
