import * as React from 'react';
import Dashboard from '../../layouts/dashboard';
import Head from 'next/head';
import Image from 'next/image';
import { PrimaryBtn } from '../../components/Buttons';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
	<Dashboard>
		<Head>
			<title>QLess | Profile</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
	<div className='px-16 pb-20 h-screen overflow-auto'>
		<div className='px-16'>
			<h3 className='text-3xl text-green-500 text-center mb-2 font-bold'>Profile</h3>
		</div>
		<form>
			<div className='flex justify-center'>
				<div>
					<Image src={`/avatars/male1.svg`} width={100} height={100} />
				</div>
			</div>
			<div className='grid grid-cols-6 place-items-center'>
			<div className='col-span-6 justify-self-end pr-14'>
					<PrimaryBtn>Update changes</PrimaryBtn>
				</div>

				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="First name"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">Second name</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="Second name"
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



				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">Phone</label>
						<input type="tel" className="form-control
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
							placeholder="+xxx-xxx-xxx-xxx-x"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">Date of birth</label>
						<input type="date" className="form-control
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
							placeholder="Date of birth"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">ID number</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="Valid ID document number"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>





				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
					<label  className="text-gray-700">Country</label>
					<select className="form-select appearance-none
					block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-gray-700
					bg-white bg-clip-padding bg-no-repeat
					border border-solid border-gray-300
					rounded
					transition
					ease-in-out
					m-0
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
						<option selected disabled>Select country</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
					<label  className="text-gray-700">State</label>
					<select className="form-select appearance-none
					block
					w-full
					px-3
					py-1.5
					text-base
					font-normal
					text-gray-700
					bg-white bg-clip-padding bg-no-repeat
					border border-solid border-gray-300
					rounded
					transition
					ease-in-out
					m-0
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
						<option selected disabled>Select state</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">City</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="Your city"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">Street</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="Street name"
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">House Name/No.</label>
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
							focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" id="floatingInput"
							placeholder="House Name/No."
						/>
						<div className="text-sm text-gray-500 mt-1">Text helper</div>
					</div>
				</div>
				<div className='col-span-3'>
					<div className="form-floating mb-3 xl:w-96">
						<label  className="text-gray-700">PIN code</label>
						<input type="tel" className="form-control
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
							placeholder="PIN / ZIP code"
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
