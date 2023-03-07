/*
    TOAST COMPONENT
*/

import React, { useEffect } from "react";
import styled from "styled-components";
import { useToast } from "./ToastProvider";
import { animated } from "react-spring";

const Wrapper = styled(animated.div)`
    margin-right: 16px;
    margin-top: 16px;
    width: 200px;

    position: relative;
    padding: 16px;
    border: 1px solid #d7d7d7;
    border-radius: 3px;
    background: white;
    box-shadow: 0px 4px 10px 0px #d7d7d7;
    color: #494e5c;
`;

const Toast = ({ children, id, style }) => {
    const { removeToast } = useToast();   
    const DURATION = 6000; 

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(id);
        }, DURATION);

        return () => {
            clearTimeout(timer);
        };
    }, [id, removeToast]);

    console.log('New Toast: ', id, children);

    return (
        <Wrapper style={style}>
            {id} {' - '}           
            {children}
        </Wrapper>
    );
};

export {Toast}

