import * as React from 'react';
import HeaderNav from '../layouts/header';
import Head from 'next/head';
import Image from 'next/image';
import { LightBtn, PrimaryBtn } from '../components/Buttons';
import {AiOutlineEye} from 'react-icons/ai';
import useTogglePassword from '../hooks/useTogglePassword';
export interface ILoginProps {
}
import Link from 'next/link';

export default function Login (props: ILoginProps) {
    const [passRef,togglePassword] = useTogglePassword();
    return (
    <div>
      <header>
          <HeaderNav/>
      </header>
      <main>
		  <div  className="grid justify-center items-center mt-10">
          <div className='rounded-lg grid grid-cols-1 lg:grid-cols-2 lg:w-max lg:shadow-2xl  h-min pr-16 gap-12'>
              <div className='rounded-l-lg w-96 pb-10 bg-indigo-600 hidden lg:block'>
				<div >
					<Image src="/signup/signup1.png" width={500} height={350}/>
					<h2 className='text-3xl font-bold text-white text-center'>New member?</h2>
					<p className='text-xl text-white  text-center mt-1'>Create an account now for free</p>
                    <div className=' flex justify-center items-center pt-2'> 
                        <Link href='/signup'>
                            <LightBtn>Sign Up</LightBtn>
                        </Link>
                    </div>
                </div>
              </div>
              <div className='w-max py-7 lg:py-10'>
				<form>
					<div className="grid justify-center px-8 lg:px-0">
						<div>
                            <h1 className='text-3xl lg:text-2xl font-bold text-center text-indigo-600 mb-2'>Login</h1>
                                <div className="form-floating mb-3 xl:w-96">
                                    <label  className="text-gray-700">Email address</label>
                                    <input type="email" className="form-control
                                    block
                                    w-full
                                    px-3
                                    pr-16
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="name@example.com"/>
                                    <div className="text-sm text-gray-500 mt-1">Text helper</div>
                                </div>
                                <div className="form-floating mb-3 xl:w-96">
                                <label  className="text-gray-700">Password</label>
                                <div className="relative w-full">
                                    
                                <input type="password" ref={passRef} className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingPassword" placeholder="Password"/>
                                
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                            <button type='button'><AiOutlineEye onClick={togglePassword} size={23} color='rgba(0,0,0,0.65)'/></button>
                                </div>
                                </div>
                                <div className="text-sm text-gray-500 mt-1">Text helper</div>
                                </div>

                            </div>
                            <Link href='/user/1520'>
						        <PrimaryBtn onClick={()=>{}}>Sign Up</PrimaryBtn>
                            </Link>
						</div>
                        <div className="form-floating mb-3 xl:w-96 mt-3 flex px-8 lg:px-0">
                            <div className="form-check">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="w-4 h-4 border-0 focus:ring-0"  />
                                    <span className="ml-2 text-gray-700">Remember me</span>
                                </label>
                            </div>
                            <div className='ml-auto'>
                                <button type='button' className='text-indigo-600'>Forgot password</button>
                            </div>
						</div>

				</form>
              </div>
          </div>
		</div>
      </main>
    </div>
  );
}
