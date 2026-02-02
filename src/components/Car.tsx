import {tileSize} from '../constants';
import * as THREE from 'three';
import { Wheel } from './Wheel';

type Props = {
    rowIndex: number;
    initialTileIndex: number;
    direction: boolean;
    speed: number;
    color: THREE.ColorRepresentation;
};

/**
 * Renders a 3D tree model using React Three Fiber.
 *
 * @param props - The properties for the Car component.
 * @param props.tileIndex - The horizontal index of the tile where the car should be placed.
 * @param props.height - The height of the car's body.
 *
 * @returns A group containing two meshes: one for the car's body and one for the car's roof.
 */
export function Car({ rowIndex, initialTileIndex, direction, speed, color }: Props) {
    return (
        <group
            position-x={[initialTileIndex * tileSize]}
            rotation-z={direction ? 0 : Math.PI}
        >
            <mesh position={[0, 0, 12]}>
                <boxGeometry args={[60, 30, 15]} />
                <meshLambertMaterial color={color} flatShading />
            </mesh>
            <mesh position={[-6, 0, 25.5]}>
                <boxGeometry args={[33, 24, 12]} />
                <meshLambertMaterial color={0xffffff} flatShading />
            </mesh>
            <Wheel x={-18}/>
            <Wheel x={18}/>
        </group>
    );
}