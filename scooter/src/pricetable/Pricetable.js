import React from 'react';
import { Table } from 'reactstrap';
import './pricetable.scss';

const Pricetable = (props) => {
  return (
    <Table>
    <tbody>
        <tr>
        <td>1 nap</td>
        <td>9000 Ft</td>
        </tr>
        <tr>
        <td>1 hét</td>
        <td>50000 Ft</td>
        </tr>
        <tr>
        <td>Hosszabb távú vagy rendszeres bérlés esetén kérje el Önnek szóló egyedi ajánlatomat.</td>
        <td></td>
        </tr>
    </tbody>
    </Table>
  );
}

export default Pricetable;