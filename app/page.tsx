'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LEDCard from '@/components/dashboard/LEDCard'
import ValueCard from '@/components/dashboard/ValueCard'
import { Droplet, Thermometer } from 'lucide-react'
import TemperatureCard from '@/components/dashboard/TemperatureCard'
import HumidityCard from '@/components/dashboard/HumidityCard'
import AirQualityCard from '@/components/dashboard/AirQualityCard'
import GarageCard from '@/components/dashboard/GarageCard'
import CarCard from '@/components/dashboard/CarCard'
import NightCard from '@/components/dashboard/NightCard'
import RainCard from '@/components/dashboard/RainCard'

export default function Home() {


	return (
		<main className="p-12">
			<section className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-y-4 gap-y-6">
				<TemperatureCard  sensor_device_id={1} />
				<HumidityCard sensor_device_id={2} />
				<AirQualityCard sensor_device_id={3} />
				<CarCard sensor_device_id={4} />
				<RainCard sensor_device_id={5} />
				<NightCard sensor_device_id={6} />

				<GarageCard device_id={2} />
				<LEDCard LEDIndex={6} device_id={6} />
				{[...Array(10)].map((i) => {
					return (
						<Card key={i}>
							<CardHeader>
								<CardTitle>Login to your account</CardTitle>
							</CardHeader>
							<CardContent>
								<p>sdsd</p>
							</CardContent>
						</Card>
					)
				})}
			</section>
		</main>
	)
}
