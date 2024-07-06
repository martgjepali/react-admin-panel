import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  EditProps,
  FileInput,
  FileField,
  ImageInput,
  ImageField,
} from "react-admin";

const EditPackage: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props} resource="packages">
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
    </Edit>
  );
};

export default EditPackage;
