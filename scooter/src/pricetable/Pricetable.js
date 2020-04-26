import React from "react";
import { Table } from "reactstrap";
import "./pricetable.scss";

const Pricetable = (props) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>1 nap</td>
          <td>{props.day} Ft</td>
        </tr>
        <tr>
          <td>1 hét</td>
          <td>{props.week} Ft</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Pricetable;
