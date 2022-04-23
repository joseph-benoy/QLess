import React from "react"
export interface Button {
    childern:React.ReactNode | string,
    onClick:(e?:React.MouseEvent<HTMLElement>)=>void
}
