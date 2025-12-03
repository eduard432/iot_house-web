"use client"

import { UncomingSensorMessage } from '@/types/dataTypes'
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useRef,
	useEffect,
} from 'react'

interface DataContextType {
	sensorDevicesData: number[]
	devices_ids: number[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

interface DataProviderProps {
	children: ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
	const [sensorDevicesData, setSensorDevicesData] = useState<number[]>([...Array(20)].map(() => 0))

	const wsRef = useRef<WebSocket | null>(null)

	useEffect(() => {
		if (wsRef.current?.readyState === WebSocket.OPEN) {
			return
		}

		const WS_URL = process.env.NEXT_PUBLIC_WS_URL
		
		if (!WS_URL) {
			console.error('MISSING: WS_URL')
			return
		}

		wsRef.current = new WebSocket(WS_URL)

        wsRef.current.onopen = (ev) => {
            console.log('Connected')
            console.log(ev)
        }

		wsRef.current.onmessage = (ev) => {
			const data = JSON.parse(ev.data) as UncomingSensorMessage
            console.log({data})
            setSensorDevicesData((prevData) => {
                const newPrevData = [...prevData]
                newPrevData[data.sensor_id] = data.value
                console.log({ sensor_id: data.sensor_id})
                console.log({ value: data.value})
                console.log(newPrevData)
                return newPrevData
            })
		}

		return () => {
			wsRef.current?.close()
		}
	}, [])

	const value: DataContextType = {
		sensorDevicesData,
		devices_ids: [],
	}

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useSensorData(sensor_device_id: number) {
	const context = useContext(DataContext)

	if (context === undefined) {
		throw new Error('useSensorData debe usarse dentro de DataProvider')
	}

	return context.sensorDevicesData[sensor_device_id]
}
