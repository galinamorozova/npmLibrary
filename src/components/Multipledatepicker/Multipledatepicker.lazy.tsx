import React, { lazy, Suspense } from 'react';

const LazyMultipledatepicker = lazy(() => import('./Multipledatepicker'));

const Multipledatepicker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMultipledatepicker {...props} />
  </Suspense>
);

export default Multipledatepicker;
