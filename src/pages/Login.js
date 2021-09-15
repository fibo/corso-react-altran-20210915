import React from "react";
import { Button } from "../components/Button";
export function Login(){
    const buttonLabel = 'Send';
    const onClick= () => {
        console.log("click")
    }
    return (<div>
        <Button label={buttonLabel} onClick={onClick} isPrimary/>
        <Button label="Cancel" />
        <Button isLoading />
    </div>
        
    );
}