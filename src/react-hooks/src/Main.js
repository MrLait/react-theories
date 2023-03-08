import React from "react";
import { useAlertToggle } from "./alert/AlertContext";

export default function Main({ }) {
    const toggle = useAlertToggle()
    return (
        <>
            <h1>Hello This is context example</h1>
            <button onClick={toggle} className="btn btn-success">Alert show</button>
        </>
    )
}