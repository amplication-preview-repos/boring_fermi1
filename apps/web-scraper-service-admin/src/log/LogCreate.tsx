import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="logType" source="logType" />
        <DateTimeInput label="createdOn" source="createdOn" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
