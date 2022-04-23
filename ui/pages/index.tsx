import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BiMenu, BiToggleRight } from "react-icons/bi";
import HeaderNav from '../layouts/header';


const Home: NextPage = () => {

  return (
    <>
      <header>
        <HeaderNav/>
      </header>
      <main>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
			<div className='lg:col-span-6 sm:col-span-12 flex justify-center items-center  px-16'>
				<h1 className='font-bold text-6xl text-indigo-600'>Events that drive growth start here.</h1>

			</div>
			<div className='lg:col-span-6 lg:col-span-12'>
				<Image src='/hero/qless_hero.png' width={600} height={500} alt='qless event booking'/>
			</div>
        </div>
      </main>
    </>
  )
}

export default Home
