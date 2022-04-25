import * as React from 'react';
import Head from 'next/head';
import HeaderNav from "../layouts/header";
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryBtn } from '../components/Buttons';
import { FaHome } from 'react-icons/fa';

export interface INotFoundProps {
}

export default function NotFound (props: INotFoundProps) {
  return (
    <>
        <Head>
            <title>QLess | 404 - Page Not Found</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
            <HeaderNav/>
        </header>
        <main>
            <div className='flex items-center justify-center flex-col'>
                <Image src={'/error/404.png'} height={400} width={650}/>
                <h3 className='font-bold text-2xl mb-2'>Oops! Page not found</h3>
                <Link href={"/"}>
                    <PrimaryBtn classes="flex flex-center"><FaHome/>&nbsp;Home</PrimaryBtn>
                </Link>
            </div>
        </main>
    </>
  );
}
