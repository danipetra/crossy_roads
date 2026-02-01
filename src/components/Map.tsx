import Grass from './Grass';
import { rows } from '../metadata';
import { Row } from "./Row";

export const Map = () => {
  return (
    <>
      <Grass rowIndex={0}/>

      {rows.map((rowData, index) => {
        return <Row key={index} rowIndex={index + 1} rowData={rowData}/>
      })}
    </>
  );
}
