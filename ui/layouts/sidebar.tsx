import Link from 'next/link';
import * as React from 'react';
import { useRouter } from 'next/router';
import {BiHome, BiMenu} from "react-icons/bi";
import DashLink from '../components/NavLink/DashLink';
import { BiWorld } from 'react-icons/bi';
import Image from 'next/image';
import {MdOutlinePersonAdd,MdQrCodeScanner,MdOutlineAppRegistration} from "react-icons/md";
import {FaRegListAlt} from "react-icons/fa";



export interface ISidebarProps {
}
import {BsCalendar2Event} from "react-icons/bs";

export default function Sidebar (props: ISidebarProps) {
    const router = useRouter();

  return (
    <div className='h-screen border col-span-2 shadow-2xl'>
		<div className='pt-2 pb-6 pr-3'>
			<div className='flex justify-end'>
				<button className='text-indigo-600 text-3xl'><span><BiMenu/></span></button>
			</div>
			<Link href='/user'>
				<a className='flex justify-center flex-col items-center text-center text-xl font-bold text-indigo-600'>
					<Image src="/logo/logo1.png" height={110} width={160} className='ml-3'/>
					<p className='-mt-5'>QLess</p>
				</a>
			</Link>
		</div>
		<hr/>
		<div>
			<ul>
				<DashLink href='/user' active={(router.pathname==='/user')}><BiHome/>Home</DashLink>
				<DashLink href='/user/popular'  active={(router.pathname==='/user/popular')}><BiWorld/>Popular</DashLink>
				<hr/>
				<DashLink href='/user/host' active={(router.pathname==='/user/host')}><MdOutlinePersonAdd/>Host</DashLink>
				<DashLink href='/user/all' active={(router.pathname==='/user/all')}><BsCalendar2Event/>All events</DashLink>
				<hr/>
				<DashLink href='/user/register' active={(router.pathname==='/user/register')}><MdOutlineAppRegistration/>Register</DashLink>
				<DashLink href='/user/bookings' active={(router.pathname==='/user/bookings')}><FaRegListAlt/>Bookings</DashLink>
				<DashLink href='/user/join' active={(router.pathname==='/user/join')}><MdQrCodeScanner/>Join event</DashLink>
			</ul>
		</div>
    </div>
  );
}
