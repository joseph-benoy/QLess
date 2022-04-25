import * as React from 'react';
import Dashboard from '../../layouts/dashboard';
import Head from 'next/head';
import Image from 'next/image';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
	<Dashboard>
		<Head>
			<title>QLess | Profile</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
	<div className='px-10'>
		<div>
			<h3 className='text-3xl text-green-500 font-bold'>Profile</h3>
		</div>
		<form>
			<div className='flex justify-center'>
				<div>
					<Image src={`/avatars/male1.svg`} width={100} height={100} />
				</div>
			</div>
			<div className='grid grid-cols-6 place-items-center'>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">First Name</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="name@example.com"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="name@example.com"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
			</div>
		</form>
	</div>
	</Dashboard>
  );
}
