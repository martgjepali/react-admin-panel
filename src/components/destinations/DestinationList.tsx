import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";

const DestinationList = (props: any) => {
  return (
    <div>
      <List sort={{ field: "DestinationID", order: "ASC" }} {...props}>
        <Datagrid>
          <TextField source="DestinationID" label="Destination ID" />
          <TextField source="DestinationName" label="Destination Name" />
          <TextField source="Country" label="Country" />
          <TextField source="Description" label="Description" />
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default DestinationList;
