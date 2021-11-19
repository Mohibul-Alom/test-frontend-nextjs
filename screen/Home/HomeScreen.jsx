import TableCheckbox from "../../components/Table/TableCheckbox/TableCheckbox";
import { Container } from "../../styles/globalStyle";
import { HomeContainer, HomeButton } from "./HomeScreen.styled";

import rol from "../../ignore/rol.json";
import { useState } from "react";

export default function HomeScreen() {
  const [valuePermission, setValuePermission] = useState(
    getValuePermission(rol.sections)
  );

  console.log("value", valuePermission);

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

  const handleAllow = () => {
    console.log("setAllow", setAllowAll(valuePermission));
    setValuePermission(setAllowAll(valuePermission));
  };

  const handleCheck = () => {
    console.log(isAllowAll(valuePermission));
  };

  return (
    <Container>
      <HomeContainer>
        <HomeButton onClick={handleAllow}>Allow</HomeButton>
        <button onClick={handleCheck}>Check</button>
        {rol.sections.map((section, index) => {
          const auxData = getData(section);
          return (
            <TableCheckbox
              valuePermission={valuePermission}
              setValuePermission={setValuePermission}
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

const getValuePermission = (sections) => {
  const permissions = sections.reduce(
    (acc, section) => [...acc, ...section.permissions],
    []
  );

  return permissions.reduce(
    (acc, permission) => ({
      ...acc,
      [permission.id]: {
        ...(permission?.actions || "")
          .split("")
          .reduce((acc, action) => ({ ...acc, [action]: false }), {}),
      },
    }),
    {}
  );
};

const setAllPermissions = (permission) => {
  return Object.keys(permission).reduce((acc, key) => {
    return {
      ...acc,
      [key]: true,
    };
  }, {});
};

const setAllowAll = (valuePermission) => {
  console.log({ valuePermission });
  return Object.keys(valuePermission).reduce((acc, key) => {
    return {
      ...acc,
      [key]: setAllPermissions(valuePermission[key]),
    };
  }, {});
};

const isAllPermission = (permission) => {
  return Object.keys(permission).reduce(
    (acc, key) => acc && permission[key],
    true
  );
};

const isAllowAll = (valuePermission) => {
  return Object.keys(valuePermission).reduce(
    (acc, key) => acc && isAllPermission(valuePermission[key]),
    true
  );
};
