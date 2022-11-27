/*!
=========================================================
* BLK Design System React - v1.2.1
=========================================================
* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { Suspense } from 'react';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";

const Tabs = React.lazy(() => import('views/IndexSections/Tabs.js'));
const Notifications = React.lazy(() => import('views/IndexSections/Notifications.js'));
const Typography = React.lazy(() => import('views/IndexSections/Typography.js'));
const JavaScript = React.lazy(() => import('./IndexSections/JavaScript'));
const Download = React.lazy(() => import('views/IndexSections/Download.js'));
const Footer = React.lazy(() => import('components/Footer/Footer.js'));

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
        <PageHeader />
        <Suspense fallback={<div>Loading...</div>}>
        <div className="main">
          <Tabs />
          <Notifications />
          <Typography />
          <JavaScript />
          <Download />
        </div>
        <Footer />
        </Suspense>
    </>
  );
}
