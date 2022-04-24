import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BiRightArrowAlt } from "react-icons/bi";
import HeaderNav from '../layouts/header';
import { PrimaryBtn } from '../components/Buttons';
import Link from 'next/link';


const Home: NextPage = () => {

  return (
    <>
		<Head>
			<title>QLess | Home</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
      <header>
        <HeaderNav/>
      </header>
      <main>
        <div className='container grid grid-cols-1 lg:grid-cols-12 content-center'>
			<div className='lg:col-span-7 sm:col-span-12 px-5 lg:px-20 flex  flex-col justify-center pt-4'>
				<div>
					<h1 className='lg:text-6xl font-bold md:text-3xl text-5xl text-indigo-600'>Events that drive growth start here</h1>
				</div>
				<div className='lg:pr-16 pr-0 pl-1 pt-5 text-lg text-slate-500 lg:text-slate-600'>
					<p>
						Streamline how you manage event calendars and bookings plus clients, sales and billings with our all-in-one event scheduling software
					</p>
				</div>
				<div className='pt-5'>
					<Link href="/signup">
						<PrimaryBtn classes="flex items-center">Get started<BiRightArrowAlt size={30}/></PrimaryBtn>
					</Link>
				</div>
			</div>
			<div className='lg:col-span-5 '>
				<Image src='/hero/hero1.png' width={600} height={500} alt='qless event booking'/>
			</div>
        </div>
      </main>
    </>
  )
}

export default Home;
