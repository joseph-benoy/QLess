import * as React from 'react';
import { Button } from '../../types/button';

export default function Primary (props:Button) {
  return (
    <button onClick={props.onClick} className={props.classes+' inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-base leading-tight  rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out text-center'}>
        {
            props.children
        }
    </button>
  );
}
