import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  minLength,
  required,
  EditProps,
} from "react-admin";

const PostPackage: React.FC<EditProps> = (props) => (
  <Edit {...props} resource="packages">
    <SimpleForm>
      <TextInput disabled source="PackageID" validate={[required()]} />
      <TextInput source="PackageName" validate={[required()]} />
      <TextInput
        source="Description"
        multiline={true}
        label="Short description"
      />
      <TextInput source="Price" label="Price" />
      <TextInput source="Duration" label="Duration" />
      <DateInput
        source="StartDate"
        label="Start Date"
        defaultValue={new Date()}
      />
      <DateInput source="EndDate" label="End Date" defaultValue={new Date()} />
      <TextInput source="DestinationID" label="Destination ID" />
    </SimpleForm>
  </Edit>
);

export default PostPackage;
