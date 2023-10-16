import React, { lazy, Suspense } from 'react';
import OrdinarySelect from "./OrdinarySelect";

const LazyOrdinarySelect = lazy(() => import('./OrdinarySelect'));

const Select2 = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <OrdinarySelect {...props} />
  </Suspense>
);

export default Select2;
