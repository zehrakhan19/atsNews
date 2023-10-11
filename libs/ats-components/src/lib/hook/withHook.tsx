/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export const withHook = (hook:any, Component:React.ComponentType) => {
    return (props:any) => {
        return <Component {...hook(props)} />
    }
}