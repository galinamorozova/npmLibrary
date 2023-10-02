import React, { lazy, Suspense } from 'react';

const LazyDownload = lazy(() => import('./Download'));

const Download = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDownload {...props} />
  </Suspense>
);

export default Download;
