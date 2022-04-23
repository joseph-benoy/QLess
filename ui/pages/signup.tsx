import * as React from 'react';
import HeaderNav from '../layouts/header';
import Head from 'next/head';
import Image from 'next/image';
import { PrimaryBtn } from '../components/Buttons';

export interface ISignUpProps {
}

export default function SignUp (props: ISignUpProps) {
  return (
    <div>
        <Head>
			<title>QLess | Sign Up</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
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
						<h1 className='text-2xl font-bold text-center text-indigo-600 mb-2'>Sign Up</h1>

						<div className="gap-1 form-floating mb-3 xl:w-96 grid sm:grid-cols-1 lg:grid-cols-2 ">
							<div>
								<label  className="text-gray-700">First Name</label>
								<input type="text" className="form-control
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
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="First Name"/>
								<div className="text-sm text-gray-500 mt-1">Text helper</div>
							</div>
							<div>
								<label  className="text-gray-700">Last Name</label>
								<input type="text" className="form-control
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
								focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="floatingInput" placeholder="Last Name"/>
								<div className="text-sm text-gray-500 mt-1">Text helper</div>
							</div>
							
							</div>
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
							<input type="password" className="form-control
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
							<div className="text-sm text-gray-500 mt-1">Text helper</div>
							</div>
							<div className="form-floating mb-3 xl:w-96">
							<label  className="text-gray-700">Confirm password</label>
							<input type="password" className="form-control
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
							<div className="text-sm text-gray-500 mt-1">Text helper</div>
							</div>
							<div className="form-floating mb-3 xl:w-max grid grid-cols-1 place-content-end">
								<div className=''>
								</div>
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
