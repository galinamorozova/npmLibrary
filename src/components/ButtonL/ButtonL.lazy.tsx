import React, { lazy, Suspense } from 'react';

const LazyButtonL = lazy(() => import('./ButtonL'));

const ButtonL = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyButtonL {...props} />
  </Suspense>
);

export default ButtonL;
