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

const renderCheckbox = (show) => {
  if (show) {
    return (
      <TableData>
        <CheckBox type="checkbox" />
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

export default function TableCheckbox({ title, column, row = {} }) {
  return (
    <div>
      <TableContainer>
        <TableTitle>{title}</TableTitle>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(column).map((index) => {
                return (
                  <TableData>
                    <CheckBoxLabel key={`column${index}`}>
                      {column[index]}
                    </CheckBoxLabel>
                  </TableData>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(row).map((sigleRow) => {
              return (
                <TableRow key={`row${sigleRow}`}>
                  <TableData>
                    <DataContainer>
                      <CheckBoxLabel>{row[sigleRow].title}</CheckBoxLabel>
                    </DataContainer>
                  </TableData>
                  {renderCheckbox(row[sigleRow].checkbox["create"])}
                  {renderCheckbox(row[sigleRow].checkbox["view"])}
                  {renderCheckbox(row[sigleRow].checkbox["update"])}
                  {renderCheckbox(row[sigleRow].checkbox["delete"])}
                  {renderCheckbox(row[sigleRow].checkbox["all"])}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
