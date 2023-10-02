import React, { lazy, Suspense } from 'react';

const LazyProgressBarComponent = lazy(() => import('./ProgressBarComponent'));

const ProgressBarComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProgressBarComponent {...props} />
  </Suspense>
);

export default ProgressBarComponent;
