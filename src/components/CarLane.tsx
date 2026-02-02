import type { Row } from "../types";
import {Road} from './Road';
import {Car} from "./Car";

type Props = {
    rowIndex: number;
    rowData: Extract<Row, {type: 'car'}>;
}

export function CarLane({ rowIndex, rowData }: Props) {
    return (
        <Road rowIndex={rowIndex}>
            {rowData.vehicles.map((vehicle, index) => (
                <Car
                    key={index}
                    rowIndex={rowIndex}
                    initialTileIndex={vehicle.initialTileIndex}
                    direction={vehicle.direction} 
                    speed={vehicle.speed} 
                    color={vehicle.color} 
                />
            ))}
        </Road>
    );
}