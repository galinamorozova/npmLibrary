import React, { lazy, Suspense } from 'react';

const LazyPassword = lazy(() => import('./Password'));

const Password = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPassword {...props} />
  </Suspense>
);

export default Password;
