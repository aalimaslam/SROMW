import { toast } from 'react-toastify';

// Define the possible modes that `toast` supports
type ToastMode = 'success' | 'error' | 'info' | 'warning';

function showToast({ mode, message }: { mode: ToastMode; message: string }) {
    // Call the toast function using the mode
    toast[mode](message);
}

export default showToast;