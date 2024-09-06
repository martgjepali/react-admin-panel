import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    minLength,
    EditProps,
    ImageInput,
    ImageField,
  } from "react-admin";
  
  const EditDestination: React.FC<EditProps> = (props) => (
    <Edit {...props} resource="destinations">
      <SimpleForm>
       <TextInput disabled source="DestinationID" />
        <TextInput source="DestinationName" validate={[required(), minLength(2)]} />
        <TextInput source="Country" validate={[required(), minLength(2)]} />
        <TextInput source="Description" multiline={true} />
        <ImageInput source="image" label="Related pictures" accept={{ 'image/*': ['.png', '.jpg'] }}>
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
  
  export default EditDestination;
  