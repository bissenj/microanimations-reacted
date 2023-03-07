/*
    TOAST CONTAINER COMPONENT
*/

import React, { useEffect } from "react";
import { createPortal } from "react-dom"
import styled from "styled-components";
import { useTransition } from "react-spring";

import { Toast } from "./Toast";

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;


const ToastContainer = ({ toasts }) => {

    useEffect(() => {
        console.log('Toasts Container: ', toasts);
    }, [toasts])

    const transitions = useTransition(toasts, {
        from: { right: "-100%" },
        enter: { right: "0%" }, 
        leave: { right: "-100%" }
    });
    
    //console.log('ToastContainer: ', toasts);

    return createPortal(
        <Wrapper>
            {transitions((props, item) => (
                <Toast key={item.id} id={item.id} style={props}>
                    {item.message}
                </Toast>
            ))}
             {/* {transitions.map((item) => (
                <Toast key={item.id} id={item.id} style={item.style}>
                    {item.message}
                </Toast>
            ))} */}
        </Wrapper>,
        document.body
    );   
}

export { ToastContainer }