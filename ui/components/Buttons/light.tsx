import * as React from 'react';
import { Button } from '../../types/button';

export default function Light (props:Button) {
  return (
    <button onClick={props.onClick} className={props.classes+'focus:text-white active:text-white hover:text-white inline-block px-6 py-2.5 bg-white text-indigo-600 font-medium text-base leading-tight  rounded shadow-md hover:bg-indigo-600 hover:shadow-lg focus:bg-indigo-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-600 active:shadow-lg focus:text-white transition duration-150 ease-in-out text-center'}>
        {
            props.children
        }
    </button>
  );
}
