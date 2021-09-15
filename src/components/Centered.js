import React from "react";
import classnames from 'classnames'

export function Centered({ children,dark }) {
    return (
        <div
            className={classnames('centered',{'centered--dark':dark})}
        >{ children }</div>)
}