import { useState } from "react";
import {
  CheckBox,
  CheckBoxLabel,
  TableContainer,
  DataContainer,
  Table,
  TableBody,
  TableRow,
  TableData,
  TableHead,
  TableTitle,
} from "./TableCheckbox.style";

const renderCheckbox = (show, id) => {
  if (show) {
    return (
      <TableData>
        <CheckBox id={id} onChange={handleChecked} type="checkbox" />
      </TableData>
    );
  } else {
    return (
      <TableData>
        <></>
      </TableData>
    );
  }
};

const handleChecked = (e) => {
  //TODO: save the ckeck state in a object to transform it later to json
  console.log("handleChecked-->", e.target.id, "---", e.target.checked);
};

export default function TableCheckbox({ title, column, row, parentKey }) {
  return (
    <div>
      <TableContainer>
        <TableTitle>{title}</TableTitle>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(column).map((index) => {
                return (
                  <TableData key={`${parentKey}:${index}`}>
                    <CheckBoxLabel>{column[index]}</CheckBoxLabel>
                  </TableData>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(row).map((sigleRow) => {
              return (
                <TableRow key={`row_${parentKey}_${sigleRow}`}>
                  <TableData>
                    <DataContainer>
                      <CheckBoxLabel>{row[sigleRow].title}</CheckBoxLabel>
                    </DataContainer>
                  </TableData>
                  {renderCheckbox(
                    row[sigleRow].checkbox["create"],
                    `check_${parentKey}_${sigleRow}_0`
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["view"],
                    `check_${parentKey}_${sigleRow}_1`
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["update"],
                    `check_${parentKey}_${sigleRow}_2`
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["delete"],
                    `check_${parentKey}_${sigleRow}_3`
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["all"],
                    `check_${parentKey}_${sigleRow}_4`
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
