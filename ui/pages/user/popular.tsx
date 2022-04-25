import * as React from 'react';
import Dashboard from '../../layouts/dashboard';

export interface IOverViewProps {
}

export default function OverView (props: IOverViewProps) {
  return (
    <Dashboard>
      <h1>Popular</h1>
    </Dashboard>
  );
}
