import React from "react";
import classNames from "classnames";

/*
export function Button({
    label="Bottone",
    onClick, 
    isLoading,
    isPrimary
}){

    return (<button className={classNames('button', {
        'is-loading':isLoading,
        'is-primary':isPrimary
    })} onClick={onClick}>{label}</button>)
}

 */
export class Button extends React.Component{

    render(){
        const {
            label="Bottone",
            onClick,
            isLoading,
            isPrimary
        }=this.props;
        return (<button className={classNames('button', {
            'is-loading':isLoading,
            'is-primary':isPrimary
        })} onClick={onClick}>{label}</button>)
    }

}