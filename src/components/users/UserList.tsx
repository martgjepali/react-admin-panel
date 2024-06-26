import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

const UserList = (props: any) => {
  return (
    <List sort={{ field: "UserID", order: "ASC" }} {...props}>
      <Datagrid>
        <TextField source="UserID" label="User ID" />
        <TextField source="GoogleID" label="Google ID" />
        <TextField source="FirstName" label="First Name" />
        <TextField source="LastName" label="Last Name" />
        <TextField source="username" label="Username" />
        <TextField source="Email" label="Email" />
        <TextField source="Phone" label="Phone" />
        <DateField source="DateOfBirth" label="Date Of Birth" />
        <DateField source="CreatedDate" label="Created Date" />
        <DateField source="UpdatedDate" label="Updated Date" />
        <BooleanField source="disabled" label="Disabled" />
        <BooleanField source="is_verified" label="Is Verified" />
      </Datagrid>
    </List>
  );
};

export default UserList;
