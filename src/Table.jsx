import React from "react";
import Data from "./Data";

function Table() {
  return (
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
