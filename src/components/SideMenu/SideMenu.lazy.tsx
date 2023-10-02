import React, { lazy, Suspense } from 'react';

const LazySideMenu = lazy(() => import('./SideMenu'));

const SideMenu = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySideMenu {...props} />
  </Suspense>
);

export default SideMenu;
