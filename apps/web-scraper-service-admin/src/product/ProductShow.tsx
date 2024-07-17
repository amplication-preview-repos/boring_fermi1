import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="manufacturer" source="manufacturer" />
        <TextField label="weight" source="weight" />
        <TextField label="countryOfOrigin" source="countryOfOrigin" />
        <TextField label="minPurchaseQuantity" source="minPurchaseQuantity" />
        <TextField label="quantity" source="quantity" />
        <TextField label="price" source="price" />
        <TextField label="name" source="name" />
        <TextField label="length" source="length" />
        <TextField label="quantityInBatch" source="quantityInBatch" />
        <TextField label="color" source="color" />
      </SimpleShowLayout>
    </Show>
  );
};
