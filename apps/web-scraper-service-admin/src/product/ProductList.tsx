import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
