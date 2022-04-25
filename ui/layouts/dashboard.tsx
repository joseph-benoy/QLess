import * as React from 'react';
import {IoIosLogOut} from "react-icons/io";
import {BsPersonCircle,BsPersonBadge} from "react-icons/bs";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {BiHome, BiMenu} from "react-icons/bi";
import DashLink from '../components/NavLink/DashLink';
import { BiWorld } from 'react-icons/bi';
import Image from 'next/image';
import {MdOutlinePersonAdd,MdQrCodeScanner,MdOutlineAppRegistration} from "react-icons/md";
import {FaRegListAlt} from "react-icons/fa";
import {BsCalendar2Event} from "react-icons/bs";
import {FiSettings} from 'react-icons/fi'

export interface IDashboardProps {
    children:React.ReactNode
}

export default function Dashboard (props: IDashboardProps) {

    const router = useRouter();
    const [sideBar,setSideBar] = React.useState<boolean>(true);
	const toggleSideBar = ()=>{
        setSideBar(!sideBar);
	}
  return (
    <div className='grid grid-cols-12'>
        <div className={`${!sideBar?"hidden":"block"} h-screen border col-span-2 shadow-xl transition duration-300 ease-out`}>
            <div className='pt-2 pb-6 '>
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

        <div className={`${sideBar?"col-span-10":"col-span-12"} h-screen`}>
            <header className='px-10 py-3'>
                <div className='grid grid-cols-12'>
                    <div  className={`flex flex-row-reverse  gap-5 ${sideBar?"col-span-12 ":"col-span-2"}`}>
                        <Link href={"/login"}>
                            <button className='text-2xl text-slate-600 font-thin'><IoIosLogOut/></button>
                        </Link>
                        <div className="group inline-block">
                        <button
                            className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                        >
                            <span className="pr-1 font-semibold flex-1 text-2xl text-slate-600 font-thin"><BsPersonCircle/></span>
                            <span>

                            </span>
                        </button>
                            <ul
                                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
                            transition duration-150 ease-in-out origin-top min-w-40 pt-2"
                            >
                                <li className="flex flex-row text-slate-600  items-center rounded-sm px-5 py-1 hover:bg-indigo-100 hover:text-indigo-700  gap-1"><BsPersonBadge/>Profile</li>
                                <li className="flex flex-row text-slate-600   items-center rounded-sm px-5 py-1 hover:bg-indigo-100  hover:text-indigo-700 gap-1"><FiSettings/>Settings</li>
                                <li className="rounded-sm px-3 py-1 hover:bg-gray-100"></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            {
                props.children
            }
        </div>
    </div>
  );
}
