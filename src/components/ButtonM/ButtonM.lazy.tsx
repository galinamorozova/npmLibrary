import React, { lazy, Suspense } from 'react';

const LazyButtonM = lazy(() => import('./ButtonM'));

const ButtonM = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyButtonM {...props} />
  </Suspense>
);

export default ButtonM;
