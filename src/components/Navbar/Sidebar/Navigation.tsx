import { OpenSide } from "@types";
import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "types/interfaces";
import Sidebar from ".";
import NavLinks from "../NavLink/NavLinks";
import NavMenu from "../NavMenu";

const Navigation: React.FC<{
  links: NavLink[];
  mobile: boolean;
  sideOpen: boolean;
  show: boolean;
  fixedNav: boolean;
  setSideOpen: OpenSide;
}> = ({ links, mobile, fixedNav, setSideOpen, show, sideOpen }) => {
  switch (mobile) {
    case true:
      return (
        <React.Fragment>
          <Helmet>
            <body className={sideOpen ? "blur" : ""} />
          </Helmet>

          <NavMenu sideOpen={sideOpen} setSideOpen={setSideOpen} />
          <Sidebar
            show={show}
            sideOpen={sideOpen}
            links={links}
            fixedNav={fixedNav}
            setSideOpen={setSideOpen}
          />
        </React.Fragment>
      );
    default:
      return <NavLinks>{links}</NavLinks>;
  }
};

export default Navigation;
