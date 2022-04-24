import * as React from 'react';

export interface IuseTogglePasswordProps {
}

export default function useTogglePassword ():[React.LegacyRef<HTMLInputElement>,()=>void] {
    const passRef = React.useRef() as React.LegacyRef<HTMLInputElement>;
    const togglePassword = (e?:React.MouseEvent<HTMLElement>):void=>{
        //@ts-ignore
        passRef.current.type = passRef.current.type==="password"?"text":"password";
    }
  return [passRef,togglePassword];
}
