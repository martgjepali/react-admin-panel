import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength,
  CreateProps,
} from "react-admin";

const PostDestination: React.FC<CreateProps> = (props) => (
  <Create {...props} resource="destinations">
    <SimpleForm>
      <TextInput source="DestinationName" validate={[required(), minLength(2)]} />
      <TextInput source="Country" validate={[required(), minLength(2)]} />
      <TextInput source="Description" multiline={true} validate={[required(), minLength(10)]} />
    </SimpleForm>
  </Create>
);

export default PostDestination;
