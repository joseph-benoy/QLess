import * as React from 'react';
import Dashboard from '../../layouts/dashboard';
import Head from 'next/head';
import Image from 'next/image';
import { DangerBtn, PrimaryBtn } from '../../components/Buttons';
import { BiTrash } from 'react-icons/bi';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
	<Dashboard>
		<Head>
			<title>QLess | Settings</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
	<div className='px-16 pb-14'>
		<div className='px-16'>
			<h3 className='text-3xl text-green-500 text-center mb-2 font-bold'>Settings</h3>
		</div>
		<form>
			<div className='flex justify-center'>
				<div>
					<Image src={`/avatars/settings.svg`} width={120} height={110} />
				</div>
			</div>
			<div className='grid grid-cols-6 place-items-center'>
			<div className='col-span-6 justify-self-end pr-14'>
					<PrimaryBtn>Update changes</PrimaryBtn>
				</div>

				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">Email</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="New password"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
			</div>
		</form>
		<div className='flex items-center justify-center pt-7'>
			<DangerBtn classes='flex flex-center'><BiTrash/>Delete account</DangerBtn>
		</div>
	</div>
	</Dashboard>
  );
}
