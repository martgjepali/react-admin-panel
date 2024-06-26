import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  FunctionField,
} from "react-admin";
import AcceptButton from "../buttons/AcceptButton";
import DeclineButton from "../buttons/DeclineButton";

const BookingList = (props: any) => {
  return (
    <List sort={{ field: "BookingID", order: "ASC" }} {...props}>
      <Datagrid>
        <TextField source="BookingID" label="Booking ID" />
        <TextField source="UserID" label="User ID" />
        <TextField source="PackageID" label="Package ID" />
        <DateField source="BookingDate" label="Booking Date" />
        <TextField source="Status" label="Status" />
        <TextField source="NumberOfPeople" label="Number Of People" />
        <TextField source="UserEmail" label="User Email" />
        <TextField source="UserFirstName" label="User First Name" />
        <TextField source="UserLastName" label="User Last Name" />
        <AcceptButton />
        <DeclineButton />
      </Datagrid>
    </List>
  );
};

export default BookingList;
