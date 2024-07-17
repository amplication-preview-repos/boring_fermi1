import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="manufacturer" source="manufacturer" />
        <NumberInput step={1} label="weight" source="weight" />
        <TextInput label="countryOfOrigin" source="countryOfOrigin" />
        <NumberInput
          step={1}
          label="minPurchaseQuantity"
          source="minPurchaseQuantity"
        />
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="price" source="price" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="length" source="length" />
        <NumberInput
          step={1}
          label="quantityInBatch"
          source="quantityInBatch"
        />
        <TextInput label="color" source="color" />
      </SimpleForm>
    </Create>
  );
};
