import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  EditButton,
} from "react-admin";

const PackageList = (props: any) => {
  return (
    <div>
      <List sort={{ field: "PackageID", order: "ASC" }} {...props}>
        <Datagrid>
          <TextField source="PackageID" label="Package ID" />
          <TextField source="PackageName" label="Package Name" />
          <TextField source="Description" label="Description" />
          <NumberField source="Price" label="Price" />
          <NumberField source="Duration" label="Duration" />
          <DateField source="StartDate" label="Start Date" />
          <DateField source="EndDate" label="End Date" />
          <TextField source="DestinationID" label="Destination ID" />
          <TextField source="Country" label="Country" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default PackageList;
