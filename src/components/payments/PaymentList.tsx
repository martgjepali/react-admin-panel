import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
} from "react-admin";

const PaymentList = (props: any) => {
    return (
        <div>
          <List sort={{ field: "PaymentID", order: "ASC" }} {...props}>
            <Datagrid>
              <TextField source="PaymentID" label="Payment ID" />
              <TextField source="BookingID" label="Booking ID" />
              <DateField source="PaymentDate" label="Payment Date" showTime />
              <NumberField source="Amount" label="Amount" />
              <TextField source="PaymentMethod" label="Payment Method" />
              <TextField source="Status" label="Status" />
              <TextField source="SessionID" label="Session ID" />
              <TextField source="PaymentIntentID" label="Payment Intent ID" />
            </Datagrid>
          </List>
        </div>
      );
}

export default PaymentList;
