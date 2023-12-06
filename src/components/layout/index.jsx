// components/Layout.js

import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MFZ Portfolio</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
