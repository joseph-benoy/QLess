import * as React from 'react';
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai';

export interface IPasswordToggleProps {
    toggleCb:()=>void
}

export default function PasswordToggle (props: IPasswordToggleProps) {
    const [pass,showPass] = React.useState<boolean>(true);
  return (
    <div>
        <button onClick={()=>{showPass(!pass);props.toggleCb();}} type='button'>{pass?<AiOutlineEyeInvisible  size={23} color='rgba(0,0,0,0.65)'/>:<AiOutlineEye  size={23} color='rgba(0,0,0,0.65)'/>}</button>
    </div>
  );
}
