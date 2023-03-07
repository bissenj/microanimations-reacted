import React, { useState } from "react";
import ToastProvider from "../components/Toasts/ToastProvider";
import Example from "../components/Toasts/Example";

export default function ToastPage() {    

    return (
        <div>
            <ToastProvider>
                <Example></Example>
            </ToastProvider>
        </div>
    );
};