import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from "react-admin";
import ImageSrcField from "../image_src_field/ImageSrcField";

const DestinationList = (props: any) => {
  return (
    <div>
      <List sort={{ field: "DestinationID", order: "ASC" }} {...props}>
        <Datagrid>
          <TextField source="DestinationID" label="Destination ID" />
          <TextField source="DestinationName" label="Destination Name" />
          <TextField source="Country" label="Country" />
          <TextField source="Description" label="Description" />
          <ImageSrcField source="image" label="Image Path" /> 
          <EditButton />
        </Datagrid>
      </List>
    </div>
  );
};

export default DestinationList;
