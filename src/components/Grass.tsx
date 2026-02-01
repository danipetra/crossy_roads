import { tilesPerRow, tileSize } from "../constants"

type Props = {
  rowIndex: number;
  children?: React.ReactNode;
}

const Grass = ({rowIndex, children}: Props) => {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh>
        <boxGeometry args={[tilesPerRow * tileSize, tileSize, 3]} />
        <meshLambertMaterial color={0xbaf455} flatShading={true} />
      </mesh>
      {children}
    </group>
  )
}

export default Grass