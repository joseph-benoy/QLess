import * as React from 'react';
import Sidebar from '../../layouts/sidebar';

export interface IDashboardProps {
}

export default function Dashboard (props: IDashboardProps) {
  return (
    <div className='grid grid-cols-12'>
        <Sidebar/>
        <div className='col-span-5  h-screen'>

        </div>
    </div>
  );
}
