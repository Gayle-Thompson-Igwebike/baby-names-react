import React from "react";
import babyNames from "./babyNames.json";

function BabyNamesList(){
const namesInOrder = babyNames.sort((a,b) => a.name.localeCompare(b.name))

return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>
      {namesInOrder.map((name) => (
        <tr key={name.id}>
          <td>{name.name}</td>
          <td>{name.sex}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

}

export default BabyNamesList;
