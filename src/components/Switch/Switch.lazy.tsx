import React, { lazy, Suspense } from 'react';

const LazySwitch = lazy(() => import('./Switch'));

const Switch = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySwitch {...props} />
  </Suspense>
);

export default Switch;
