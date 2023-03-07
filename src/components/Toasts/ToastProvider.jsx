/*
    TOAST PROVIDER COMPONENT
*/

import React, { useState, useCallback, useContext, useEffect } from "react";
import { ToastContainer } from "./ToastContainer";

const ToastContext = React.createContext(null); 

let id = 1;

const ToastProvider = ({children}) => {
    const [toasts, setToasts] = useState([]);

    useEffect(() => {
        console.log('Toasts: ', toasts);
    }, [toasts])
        
    const addToast = useCallback(
        content => {
            console.log('addToast: ', id, content);

            setToasts(toasts => [
                ...toasts,
                { 
                    id: id++, 
                    message: content 
                }
            ]);

        }, 
        [setToasts]
    );

    
    const removeToast = useCallback(
        id => {
            setToasts(toasts => toasts.filter(t => t.id !== id));
        }, 
        [setToasts]
    );
    
    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            <ToastContainer toasts={toasts} />     
            {children}
        </ToastContext.Provider>
    );
};


const useToast = () => {
    const toastHelpers = useContext(ToastContext);
    return toastHelpers;
}

export { useToast }
export default ToastProvider;