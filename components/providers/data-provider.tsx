'use client'

import { UncomingActuatorMessage, UncomingSensorMessage } from '@/types/dataTypes'
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
    actuatorDevicesState: string[]
    ledStates: boolean[]
}

const DataContext = createContext<DataContextType | undefined>(undefined)

interface DataProviderProps {
	children: ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
	const [sensorDevicesData, setSensorDevicesData] = useState<number[]>(
		[...Array(20)].map(() => 0)
	)
    const [actuatorDevicesState, setActuatorDevicesState] = useState<string[]>(
		[...Array(20)].map(() => "")
	)
    const [ledStates, setLedStates] = useState<boolean[]>(
		[...Array(8)].map(() => false)
	)

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
			const data = JSON.parse(ev.data) as UncomingSensorMessage | UncomingActuatorMessage
			console.log({ data })
			if (data.type == 'sensor_reading') {
				setSensorDevicesData((prevData) => {
					const newPrevData = [...prevData]
					newPrevData[data.sensor_id] = data.value
					console.log({ sensor_id: data.sensor_id })
					console.log({ value: data.value })
					console.log(newPrevData)
					return newPrevData
				})
			} else if(data.type == 'actuator_state') {
                // LED's state
                // State format: "000001" binary
                if(data.device_id == 6 && data.state.length == 8) {
                    const arregloBoolean = Array.from(data.state, bit => bit === '1');
                    setLedStates(arregloBoolean)
                }
            }
		}

		return () => {
			wsRef.current?.close()
		}
	}, [])

	const value: DataContextType = {
		sensorDevicesData,
        actuatorDevicesState,
        ledStates
	}

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useLedStates = (ledIndex: number): boolean => {
    const context = useContext(DataContext)

	if (context === undefined) {
		throw new Error('useSensorData debe usarse dentro de DataProvider')
	}

	return context.ledStates[ledIndex];
}

export function useSensorData(sensor_device_id: number) {
	const context = useContext(DataContext)

	if (context === undefined) {
		throw new Error('useSensorData debe usarse dentro de DataProvider')
	}

	return context.sensorDevicesData[sensor_device_id]
}
