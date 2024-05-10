import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TttList } from "./ttt/TttList";
import { TttCreate } from "./ttt/TttCreate";
import { TttEdit } from "./ttt/TttEdit";
import { TttShow } from "./ttt/TttShow";
import { FurnitureList } from "./furniture/FurnitureList";
import { FurnitureCreate } from "./furniture/FurnitureCreate";
import { FurnitureEdit } from "./furniture/FurnitureEdit";
import { FurnitureShow } from "./furniture/FurnitureShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"t1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Ttt"
          list={TttList}
          edit={TttEdit}
          create={TttCreate}
          show={TttShow}
        />
        <Resource
          name="Furniture"
          list={FurnitureList}
          edit={FurnitureEdit}
          create={FurnitureCreate}
          show={FurnitureShow}
        />
      </Admin>
    </div>
  );
};

export default App;
