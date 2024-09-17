import { toast } from 'react-toastify';
type ToastMode = 'success' | 'error' | 'info' | 'warning';

function showToast({ mode, message }: { mode: ToastMode; message: string }) {
    toast[mode](message);
}

export default showToast;