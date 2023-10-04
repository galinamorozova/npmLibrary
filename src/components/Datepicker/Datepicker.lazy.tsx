import React, { lazy, Suspense } from 'react';

const LazyDatepicker = lazy(() => import('./Datepicker'));

const Datepicker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDatepicker {...props} />
  </Suspense>
);

export default Datepicker;
