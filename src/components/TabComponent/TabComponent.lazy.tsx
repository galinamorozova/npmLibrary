import React, { lazy, Suspense } from 'react';

const LazyTabComponent = lazy(() => import('./TabComponent'));

const TabComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTabComponent {...props} />
  </Suspense>
);

export default TabComponent;
