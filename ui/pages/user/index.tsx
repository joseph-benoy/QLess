import * as React from 'react';
import Alert from '../../components/Alerts';
import Dashboard from '../../layouts/dashboard';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {

  return (
    <>
    <Alert text='' color='green' show={false}>
    <Dashboard>
      <h1>OverView</h1>
    </Dashboard>
    </Alert>
    </>
  );
}
