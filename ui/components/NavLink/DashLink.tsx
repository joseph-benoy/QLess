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
      <a className={`${props.active?"text-indigo-700 text-lg bg-indigo-100":"text-slate-500	"} hover:text-indigo-700  hover:bg-indigo-100 flex flex-row items-center gap-2 text-md lg:px-14 lg:py-3 `}>{props.children}</a>
    </Link>
  </li>
  );
}
