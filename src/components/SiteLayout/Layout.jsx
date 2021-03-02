import React from "react";
import PropTypes from "prop-types";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.scss";

const Layout = ({ children }) => (
  <div className="main-container">
    <div className="border border-1"></div>
    <div className="border border-2"></div>
    <div className="border border-3"></div>
    <div className="border border-h1"></div>
    <div className="border border-h2"></div>
    <div className="border border-h3"></div>
    <div className="wrapper">
      <Header />
      <main className="content-container">{children}</main>
      <Footer />
    </div>
  </div>
);

Layout.propTypes = { children: PropTypes.node };

export default Layout;