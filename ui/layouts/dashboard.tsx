import * as React from 'react';
import Sidebar from './sidebar';
import {IoIosLogOut} from "react-icons/io";
import {BsPersonCircle} from "react-icons/bs";
import Link from 'next/link';

export interface IDashboardProps {
    children:React.ReactNode
}

export default function Dashboard (props: IDashboardProps) {
  return (
    <div className='grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-10 h-screen'>
            <header>
                <div  className="flex flex-row-reverse px-10 py-3 gap-5">
                    <Link href={"/login"}>
                        <button className='text-2xl text-slate-600 font-thin'><IoIosLogOut/></button>
                    </Link>
                    <button className='text-2xl text-slate-600'><BsPersonCircle/></button>
                </div>
            </header>
            {
                props.children
            }
        </div>
    </div>
  );
}
