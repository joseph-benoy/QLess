import Link from 'next/link';
import * as React from 'react';

export interface IDashLinkProps {
  href:string,
  children?:React.ReactNode,
  active?:boolean
}

export default function DashLink (props: IDashLinkProps) {
  return (
    <li>
    <Link href={props.href}>
        <a className={`${props.active?" text-green-700 text-lg bg-green-100":"text-slate-500	"} hover:text-green-700   hover:bg-green-100 flex flex-row items-center gap-2 text-md lg:px-14 lg:py-3 `}>{props.children}</a>
    </Link>
  </li>
  );
}
