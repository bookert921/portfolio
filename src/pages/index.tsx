import AboutPage from "@components/Sections/About";
import LandingPage from "@components/Sections/Landing";
import Work from "@components/Sections/Work";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <LandingPage />
      <AboutPage />
      <Work />
    </React.Fragment>
  );
}
