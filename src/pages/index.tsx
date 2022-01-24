import AboutPage from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <LandingPage />
      <AboutPage />
    </React.Fragment>
  );
}
