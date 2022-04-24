import Link from 'next/link';
import * as React from 'react';

export interface IDashLinkProps {
  href:string,
  children?:React.ReactNode,
  icon?:JSX.Element,
  label?:string
  active?:boolean
}

export default function DashLink (props: IDashLinkProps) {
  return (
    <div>
      <Link href={props.href}>
        <button className='inline-block w-full py-4 bg-indigo-600 text-white font-medium   text-base leading-tight   shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out text-center'>
			{
				props.children
			}
        </button>
      </Link>
    </div>
  );
}
