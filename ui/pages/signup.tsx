import * as React from 'react';
import HeaderNav from '../layouts/header';
import Head from 'next/head';

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
          <div>
              
          </div>
      </main>
    </div>
  );
}
