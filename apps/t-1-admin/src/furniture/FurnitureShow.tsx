import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const FurnitureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
