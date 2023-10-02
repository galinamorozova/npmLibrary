import React, { lazy, Suspense } from 'react';

const LazyTextaria = lazy(() => import('./Textaria'));

const Textaria = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTextaria {...props} />
  </Suspense>
);

export default Textaria;
