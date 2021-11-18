import { useReducer, useRef, useState } from "react";
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

export default function TableCheckbox({ title, column, row, parentKey }) {
  const ref = useRef([]);

  const handleChecked = (e) => {
    //TODO: save the ckeck state in a object to transform it later to json
    console.log("check-->", e.target.id, "---", e.target.checked);
  };

  const renderCheckbox = (show, id, ref, parentKey) => {
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
                    `${row[sigleRow].id}_${parentKey}_${sigleRow}_C`,
                    ref,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["view"],
                    `${row[sigleRow].id}_${parentKey}_${sigleRow}_R`,
                    ref,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["update"],
                    `${row[sigleRow].id}_${parentKey}_${sigleRow}_U`,
                    ref,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["delete"],
                    `${row[sigleRow].id}_${parentKey}_${sigleRow}_D`,
                    ref,
                    parentKey
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

const KEY = {};
