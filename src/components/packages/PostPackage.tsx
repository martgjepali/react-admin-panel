import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  CreateProps
} from "react-admin";

const PostPackage: React.FC<CreateProps> = (props) => {
  return (
    <Create {...props} resource="packages">
      <SimpleForm>
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
        <DateInput
          source="EndDate"
          label="End Date"
          defaultValue={new Date()}
        />
        <TextInput source="DestinationID" label="Destination ID" />
      </SimpleForm>
    </Create>
  );
};

export default PostPackage;
