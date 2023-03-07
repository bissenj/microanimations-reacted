/*
    Example from: https://aibolik.com/blog/creating-toast-api-with-react-hooks
*/

import React, { useState } from "react";
import ToastProvider, { useToast } from "./ToastProvider";

export default function Example() {
    const { addToast } = useToast();
    const [value, setValue] = useState("");

    return (
        <div>
            <ToastProvider>
                <div style={{padding: '15px'}}>
                    <p>Enter a message for the Toast</p>
                    <div style={{display: 'flex'}}>
                        {/* INPUT */}
                        <input value={value} onChange={e=>setValue(e.target.value)} />

                        {/* BUTTON  */}
                        <button
                            onClick={() => {
                                if (value) {
                                    //console.log(value);
                                    addToast(value);
                                    setValue("");
                                }
                            }}
                        >
                            Add Toast
                        </button>
                    </div>
                </div>
            </ToastProvider>
        </div>
    );
};