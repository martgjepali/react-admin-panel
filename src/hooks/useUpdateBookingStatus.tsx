import { useState } from 'react';
import { useNotify, useRefresh } from 'react-admin';

const useUpdateBookingStatus = () => {
    const [isLoading, setLoading] = useState(false);
    const notify = useNotify();
    const refresh = useRefresh();
    const URL = "https://server-app-zxcxm.ondigitalocean.app"

    const updateStatus = async (bookingID: number, status: string) => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}/bookings/${bookingID}/status?status=${status}`, {
                method: 'PUT',
            });

            if (response.ok) {
                notify(`Booking ${status.toLowerCase()}`, { type: 'success' });
                refresh();
            } else {
                notify(`Error updating booking status`, { type: 'error' });
            }
        } catch (error) {
            const errorMessage = (error as Error).message || 'Unknown error';
            notify(`Error: ${errorMessage}`, { type: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return { updateStatus, isLoading };
};

export default useUpdateBookingStatus;
