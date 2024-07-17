import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="logType" source="logType" />
        <DateTimeInput label="createdOn" source="createdOn" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
