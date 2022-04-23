import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BiRightArrowAlt } from "react-icons/bi";
import HeaderNav from '../layouts/header';
import { PrimaryBtn } from '../components/Buttons';


const Home: NextPage = () => {

  return (
    <>
      <header>
        <HeaderNav/>
      </header>
      <main>
        <div className='container grid grid-cols-1 lg:grid-cols-12 content-center'>
			<div className='lg:col-span-7 sm:col-span-12 px-20 flex  flex-col justify-center '>
				<div>
					<h1 className='font-bold text-6xl text-indigo-600'>Events that drive growth start here</h1>
				</div>
				<div className='pr-16 pl-1 pt-5 text-lg text-slate-600'>
					<p>
						Streamline how you manage event calendars and bookings plus clients, sales and billings with our all-in-one event scheduling software
					</p>
				</div>
				<div className='pt-5'>
					<PrimaryBtn onClick={()=>{}}>Get started<BiRightArrowAlt size={30}/></PrimaryBtn>
				</div>
			</div>
			<div className='lg:col-span-5 lg:col-span-6'>
				<Image src='/hero/qless_hero.png' width={600} height={500} alt='qless event booking'/>
			</div>
        </div>
      </main>
    </>
  )
}

export default Home
