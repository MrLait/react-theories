import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main({ }) {
    const { toggle } = useAlert()
    return (
        <>
            <h1>Hello This is context example</h1>
            <button onClick={toggle} className="btn btn-success">Alert show</button>
        </>
    )
}