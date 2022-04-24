import Link from 'next/link';
import * as React from 'react';
import {FaHome} from "react-icons/fa";
import { useRouter } from 'next/router';
import { linkTypes } from '../utils/constants';
import DashLink from '../components/NavLink/DashLink';
import { BiWorld } from 'react-icons/bi';
export interface ISidebarProps {
}

export default function Sidebar (props: ISidebarProps) {
    const router = useRouter();

  return (
    <div className='col-span-7 b-red-700 h-screen'>
      <div>
          <h2>QLess</h2>
      </div>
      <div className='flex flex-col'>
			<DashLink href='/user' label='Home' icon={<FaHome/>}><FaHome/>Home</DashLink>
			<DashLink href='/user'  label='Popular' icon={<BiWorld/>}><BiWorld/>Popular</DashLink>
      </div>
    </div>
  );
}
