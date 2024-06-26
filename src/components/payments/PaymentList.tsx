import {
    List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
  } from "react-admin";

const PaymentList = (props: any) => {
    return (
        <div>
          <List sort={{ field: "PackageID", order: "ASC" }} {...props}>
            <Datagrid>
              <TextField source="PaymentID" label="Payment ID" />
              <TextField source="BookingID" label="Booking ID" />
              <TextField source="PaymentDate" label="Payment Date" />
              <NumberField source="Amount" label="Amount" />
              <NumberField source="PaymentMethod" label="Payment Method" />
              <DateField source="Status" label="Status" />
            </Datagrid>
          </List>
        </div>
      );
}

export default PaymentList