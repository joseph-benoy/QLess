import * as React from 'react';
import Dashboard from '../../layouts/dashboard';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
    <Dashboard>
      <h1>Host</h1>
    </Dashboard>
  );
}
