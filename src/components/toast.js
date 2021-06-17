import { toast } from 'react-toastify'

const toastConfig = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}


export function message(message) {
    toast.dark( message, toastConfig)
}
