import React, { lazy, Suspense } from 'react';

const LazyTreeView = lazy(() => import('./TreeView'));

const TreeView = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTreeView {...props} />
  </Suspense>
);

export default TreeView;
