export interface UncomingSensorMessage {
    type: 'sensor_reading' | 'actuator_state',
    device_id: number,
    sensor_id: number,
    value: number
} 