import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    minLength,
    EditProps,
  } from "react-admin";
  
  const EditDestination: React.FC<EditProps> = (props) => (
    <Edit {...props} resource="destinations">
      <SimpleForm>
       <TextInput disabled source="DestinationID" />
        <TextInput source="DestinationName" validate={[required(), minLength(2)]} />
        <TextInput source="Country" validate={[required(), minLength(2)]} />
        <TextInput source="Description" multiline={true} validate={[required(), minLength(10)]} />
      </SimpleForm>
    </Edit>
  );
  
  export default EditDestination;
  