import {tileSize} from '../constants';

type Props = {
    tileIndex: number;
    height: number;
};

/**
 * Renders a 3D tree model using React Three Fiber.
 *
 * @param props - The properties for the Tree component.
 * @param props.tileIndex - The horizontal index of the tile where the tree should be placed.
 * @param props.height - The height of the tree's foliage.
 *
 * @returns A group containing two meshes: one for the tree's foliage and one for the trunk.
 */
export function Tree({ tileIndex, height }: Props) {
    return (
        <group
            position-x={[tileIndex * tileSize]}>
            <mesh position-z={[height / 2 + 20]}>
                <boxGeometry args={[30, 30, height]} />
                <meshLambertMaterial color={0x7aa21d} flatShading />
            </mesh>
            <mesh position-z={10}>
                <boxGeometry args={[15, 15, 20]} />
                <meshLambertMaterial color={0x4d2926} flatShading />
            </mesh>
        </group>
    );
}
