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
  valuePermission,
  setValuePermission,
}) {
  const handleChecked = (id, permission) => {
    setValuePermission({
      ...valuePermission,
      [id]: {
        ...valuePermission[id],
        [permission]: !valuePermission[id][permission],
      },
    });
  };

  const renderCheckbox = (show, id, permission) => {
    if (show) {
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
                    "C"
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["view"],
                    `${row[sigleRow].id}`,
                    "R"
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["update"],
                    `${row[sigleRow].id}`,
                    "U"
                  )}
                  {renderCheckbox(
                    row[sigleRow].checkbox["delete"],
                    `${row[sigleRow].id}`,
                    "D"
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
