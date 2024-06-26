import React from "react";
import { Button } from "@mui/material";
import { useRecordContext } from "react-admin";
import useUpdateBookingStatus from "../../hooks/useUpdateBookingStatus";

const AcceptButton = () => {
  const record = useRecordContext();
  const { updateStatus, isLoading } = useUpdateBookingStatus();

  const handleClick = () => {
    if (record) {
      updateStatus(record.BookingID, "CONFIRMED");
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      disabled={isLoading}
    >
      Accept
    </Button>
  );
};

export default AcceptButton;
