import React from "react";
import { Table } from "reactstrap";
import "./pricetable.scss";

const Pricetable = (props) => {
  return (
    <Table>
      <tbody>
        {props.day &&
        <tr>
          <td>1 nap</td>
          <td>{props.day} Ft</td>
        </tr>
        }
        {props.week1 && 
        <tr>
          <td>1 hét 1 akkumulátorral</td>
          <td>{props.week1} Ft</td>
        </tr>}        
        <tr>
          <td>1 hét 2 akkumulátorral</td>
          <td>{props.week} Ft</td>
        </tr>
        {props.week3 && 
        <tr>
          <td>1 hét 3 akkumulátorral</td>
          <td>{props.week3} Ft</td>
        </tr>}
        {props.month1 && 
        <tr>
          <td>1 hónap 3 akkumulátorral</td>
          <td>{props.month1} Ft</td>
        </tr>}    
        {props.month2 && 
        <tr>
          <td>1 hónap 2 akkumulátorral</td>
          <td>{props.month2} Ft</td>
        </tr>}        
      </tbody>
    </Table>
  );
};

export default Pricetable;
