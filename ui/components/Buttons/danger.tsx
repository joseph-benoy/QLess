import * as React from 'react';
import { Button } from '../../types/button';

export default function Danger (props:Button) {
  return (
    <button onClick={props.onClick} className={props.classes+' inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-base leading-tight  rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out text-center'}>
        {
            props.children
        }
    </button>
  );
}
