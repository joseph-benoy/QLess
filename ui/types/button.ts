import React from "react"
export interface Button {
    children:React.ReactNode,
    onClick?:(e?:React.MouseEvent<HTMLElement>)=>void
    type?:string,
    classes?:string
}
