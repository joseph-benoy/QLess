import * as React from 'react';
import Sidebar from './sidebar';

export interface IDashboardProps {
    children:React.ReactNode
}

export default function Dashboard (props: IDashboardProps) {
  return (
    <div className='grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-10 h-screen'>
            {
                props.children
            }
        </div>
    </div>
  );
}
