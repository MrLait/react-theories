import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main({ }) {
    const { show } = useAlert()
    return (
        <>
            <h1>Hello This is context example</h1>
            <button onClick={() => show('This text from main js')} className="btn btn-success">Alert show</button>
        </>
    )
}