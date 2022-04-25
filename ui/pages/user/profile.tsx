import * as React from 'react';
import Dashboard from '../../layouts/dashboard';
import Head from 'next/head';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
	<Dashboard>
		<Head>
			<title>QLess | Profile</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
	<div>
		
	</div>
	</Dashboard>
  );
}
