import * as React from 'react';
import { Button } from '../../types/button';

export default function Primary (props:Button) {
  return (
    <button onClick={props.onClick} className=' flex items-center inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-base leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
        {
            props.children
        }
    </button>
  );
}
