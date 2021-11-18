import TableCheckbox from "../../components/Table/TableCheckbox/TableCheckbox";
import { Container } from "../../styles/globalStyle";
import { HomeContainer } from "./HomeScreen.styled";

import rol from "../../ignore/rol.json";

export default function HomeScreen() {
  const getHeader = ["", "Create", "View", "Edit", "Delete"];

  const getRow = (permissions) => {
    let auxRow = [];
    permissions.forEach((element) => {
      let sigleRow = {
        title: "",
        id: "",
        checkbox: {
          create: false,
          delete: false,
          update: false,
          view: false,
        },
      };

      sigleRow.title = element.description;
      sigleRow.id = element.id;
      for (let key in element) {
        if (Object.hasOwnProperty.call(element, key) && key === "actions") {
          const action = element[key];

          action.includes("C")
            ? (sigleRow.checkbox.create = true)
            : (sigleRow.checkbox.create = false);
          action.includes("R")
            ? (sigleRow.checkbox.view = true)
            : (sigleRow.checkbox.view = false);
          action.includes("U")
            ? (sigleRow.checkbox.update = true)
            : (sigleRow.checkbox.update = false);
          action.includes("D")
            ? (sigleRow.checkbox.delete = true)
            : (sigleRow.checkbox.delete = false);
          auxRow.push({ ...sigleRow });
        }
      }
    });
    return auxRow;
  };

  const getData = (section) => {
    const title = section.title;
    const column = { ...getHeader };
    const row = { ...getRow(section.permissions) };
    return { title, column, row };
  };

  return (
    <Container>
      <HomeContainer>
        {rol.sections.map((section, index) => {
          const auxData = getData(section);
          return (
            <TableCheckbox
              key={`table${index + 1}`}
              title={auxData.title}
              column={auxData.column}
              row={auxData.row}
              parentKey={index + 1}
            />
          );
        })}
      </HomeContainer>
    </Container>
  );
}

const ID = {
  usuarios: {
    C: false,
    R: false,
  },
};
