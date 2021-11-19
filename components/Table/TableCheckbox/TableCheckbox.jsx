import { useEffect, useReducer, useRef, useState } from "react";
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

export default function TableCheckbox({
  title,
  column,
  row,
  parentKey,
  allowAll,
  valuePermission,
  setValuePermission,
}) {
  const ref = useRef([]);

  const handleChecked = (id, permission) => {
    setValuePermission({
      ...valuePermission,
      [id]: {
        ...valuePermission[id],
        [permission]: !valuePermission[id][permission],
      },
    });
  };

  console.log("value-->", valuePermission);

  const renderCheckbox = (show, id, permission, index, parentKey) => {
    if (show) {
      console.log({ value: valuePermission[id][permission] });
      return (
        <TableData>
          <CheckBox
            id={id}
            onChange={() => handleChecked(id, permission)}
            type="checkbox"
            checked={valuePermission[id][permission]}
          />
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

  useEffect(() => {
    changeCheckbox(allowAll);
  }, [allowAll]);

  let i = 0;

  const changeCheckbox = () => {
    console.log("changeCheckbox--> cambiar todos los checkbox a true", i);
  };

  const addToRef = (myref) => {
    if (myref && !ref.current.includes(myref)) {
      ref.current.push(myref);
    }
  };

  //   const refResult = useRef([]);
  //   refResult.current = [];
  //   const addToRefs = (el: never) => {
  //     if (el && !refResult.current.includes(el)) {
  //       refResult.current.push(el);
  //     }
  //   };

  // <OrderStyles.Card ref={addToRefs}>

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
                    `${row[sigleRow].id}`,
                    "C",
                    sigleRow,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["view"],
                    `${row[sigleRow].id}`,
                    "R",
                    sigleRow,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["update"],
                    `${row[sigleRow].id}`,
                    "U",
                    sigleRow,
                    parentKey
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["delete"],
                    `${row[sigleRow].id}`,
                    "D",
                    sigleRow,
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
