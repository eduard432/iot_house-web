export interface UncomingActuatorMessage {
    type: 'actuator_state',
    device_id: number,
    state: string
}

export interface UncomingSensorMessage {
    type: 'sensor_reading',
    device_id: number,
    sensor_id: number,
    value: number
} 