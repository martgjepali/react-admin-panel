import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength,
  CreateProps,
  ImageField,
  ImageInput,
} from "react-admin";

const PostDestination: React.FC<CreateProps> = (props) => (
  <Create {...props} resource="destinations">
    <SimpleForm>
      <TextInput source="DestinationName" validate={[required(), minLength(2)]} />
      <TextInput source="Country" validate={[required(), minLength(2)]} />
      <TextInput source="Description" multiline={true} />
      <ImageInput source="image" label="Related pictures" accept={{ 'image/*': ['.png', '.jpg'] }}>
          <ImageField source="src" title="title" />
        </ImageInput>
    </SimpleForm>
  </Create>
);

export default PostDestination;
