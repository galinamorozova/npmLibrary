import React, { lazy, Suspense } from 'react';

const LazyUrl = lazy(() => import('./Url'));

const Url = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUrl {...props} />
  </Suspense>
);

export default Url;
