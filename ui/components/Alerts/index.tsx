import * as React from 'react';
import {CgClose} from "react-icons/cg";


export interface IInfoProps {
    text:string,
    children?:React.ReactNode,
    color?:string,
    show:boolean
}

export default function Alert (props: IInfoProps) {
    const close = ()=>{
        document.getElementById("alertbox")!.style.display = "none";
      }
  return (
    <>
        <div>
            {
                props.children
            }
            <div className={`${props.show?"block":"hidden"} alert`} id="alertbox">
                <div className={`flex bg-${props.color?props.color:"blue"}-500 px-5 pl-6 py-3 w-fit items-center rounded gap-2 shadow-2xl`}>
                    <p className='text-white font-medium'>{props.text}</p>
                    <CgClose className='text-white font-bold' onClick={close}/>
                </div>  
            </div>
        </div>
    </>
  );
}
