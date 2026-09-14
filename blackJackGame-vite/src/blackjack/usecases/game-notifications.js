import {Toastify} from './index.js';
function gameNotification(mensaje,tipo){
    if(tipo === 'error'){
    Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#FF0000",
                color: "#fff"
            }
        }).showToast();
    }else if(tipo === 'success'){
        Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#008000",
                color: "#fff"
            }
        }).showToast();
    }else if (tipo === 'info'){
        Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#f7de00",
                color: "#fff"
            }
        }).showToast();
    }
}

export default gameNotification;