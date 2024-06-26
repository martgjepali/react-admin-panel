import {
  useUpdate,
  useNotify,
  useRefresh,
  useRecordContext,
  useRedirect,
} from "react-admin";
import Button from "@mui/material/Button";
import { Booking, ButtonProps } from "../../interfaces/Interfaces";
import useUpdateBookingStatus from "../../hooks/useUpdateBookingStatus";

interface DeclineButtonProps {
  record: Booking;
}

const DeclineButton = () => {
  const record = useRecordContext();
  const { updateStatus, isLoading } = useUpdateBookingStatus();

  const handleClick = () => {
    if (record) {
      updateStatus(record.BookingID, "CANCELLED");
    }
  };

  return (
    <Button
      variant="contained"
      color="error"
      onClick={handleClick}
      disabled={isLoading}
    >
      Decline
    </Button>
  );
};

export default DeclineButton;
