import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FurnitureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Furnitures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Color" source="color" />
        <TextField label="Price" source="price" />
        <TextField label="Name" source="name" />
        <TextField label="Description" source="description" />
        <TextField label="Material" source="material" />
        <TextField label="Dimensions" source="dimensions" />
        <BooleanField label="InStock" source="inStock" />
        <TextField label="Category" source="category" />
        <TextField label="MaterialUsed" source="materialUsed" />
        <TextField label="SizeDimensions" source="sizeDimensions" />
        <BooleanField label="Available" source="available" />
      </Datagrid>
    </List>
  );
};
