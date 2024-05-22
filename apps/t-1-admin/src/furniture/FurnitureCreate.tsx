import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const FurnitureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Color" source="color" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Name" source="name" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Material" source="material" />
        <TextInput label="Dimensions" source="dimensions" />
        <BooleanInput label="InStock" source="inStock" />
        <TextInput label="Category" source="category" />
        <TextInput label="MaterialUsed" source="materialUsed" />
        <TextInput label="SizeDimensions" source="sizeDimensions" />
        <BooleanInput label="Available" source="available" />
      </SimpleForm>
    </Create>
  );
};
