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

                  {row[sigleRow].checkbox["create"] && (
                    <TableData>
                      <CheckBox type="checkbox" />
                    </TableData>
                  )}

                  {!row[sigleRow].checkbox["create"] && (
                    <TableData>
                      <></>
                    </TableData>
                  )}

                  {row[sigleRow].checkbox["view"] && (
                    <TableData>
                      <CheckBox type="checkbox" />
                    </TableData>
                  )}

                  {!row[sigleRow].checkbox["view"] && (
                    <TableData>
                      <></>
                    </TableData>
                  )}

                  {row[sigleRow].checkbox["update"] && (
                    <TableData>
                      <CheckBox type="checkbox" />
                    </TableData>
                  )}

                  {!row[sigleRow].checkbox["update"] && (
                    <TableData>
                      <></>
                    </TableData>
                  )}

                  {row[sigleRow].checkbox["delete"] && (
                    <TableData>
                      <CheckBox type="checkbox" />
                    </TableData>
                  )}

                  {!row[sigleRow].checkbox["delete"] && (
                    <TableData>
                      <></>
                    </TableData>
                  )}

                  {row[sigleRow].checkbox["all"] && (
                    <TableData>
                      <CheckBox type="checkbox" />
                    </TableData>
                  )}
                  {!row[sigleRow].checkbox["all"] && (
                    <TableData>
                      <></>
                    </TableData>
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
