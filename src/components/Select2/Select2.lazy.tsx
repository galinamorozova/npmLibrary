import React, { lazy, Suspense } from 'react';

const LazySelect2 = lazy(() => import('./Select2'));

const Select2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySelect2 {...props} />
  </Suspense>
);

export default Select2;
