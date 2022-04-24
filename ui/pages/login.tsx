import * as React from 'react';
import HeaderNav from '../layouts/header';
import Head from 'next/head';
import Image from 'next/image';
import { PrimaryBtn } from '../components/Buttons';
import {AiOutlineEye} from 'react-icons/ai';
import useTogglePassword from '../hooks/useTogglePassword';
export interface ILoginProps {
}

export default function Login (props: ILoginProps) {
    const [passRef,togglePassword] = useTogglePassword();
    return (
    <div>
      <header>
          <HeaderNav/>
      </header>
      <main>
		  <div  className="flex justify-center">
          <div className='rounded-lg grid grid-cols-2 lg:w-max shadow-2xl  h-min pr-16 gap-12'>
              <div className='rounded-l-lg w-96 pt-10 bg-indigo-600'>
				<div>
					<Image src="/signup/signup1.png" width={500} height={350}/>
					<h2 className='text-5xl font-bold text-white text-center'>QLess</h2>
					<p className='text-xl text-white  text-center mt-3'>Memorable events don't just happen. They happen to be our business</p>
				</div>
              </div>
              <div className='w-max py-5'>
				<form>
					<div className="grid justify-center">
						
						<div>
						<h1 className='text-2xl font-bold text-center text-indigo-600 mb-2'>Login</h1>
							<div className="form-floating mb-3 xl:w-96">
							<label  className="text-gray-700">Email address</label>
							<input type="email" className="form-control
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
                                        <a><AiOutlineEye onClick={togglePassword} size={23} color='rgba(0,0,0,0.65)'/></a>
                            </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-1">Text helper</div>
							</div>
						</div>
						<PrimaryBtn onClick={()=>{}}>Sign Up</PrimaryBtn>

						</div>


				</form>
              </div>
          </div>
		</div>
      </main>
    </div>
  );
}
