import Layout from "@components/Layout";
import LandingPage from "@components/Sections/Landing";
import { NavLink } from "types/interfaces";

export const siteMenu: NavLink[] = [
  { url: "/", name: "home" },
  { url: "/about", name: "about" },
  { url: "/work", name: "work" },
  { url: "/projects", name: "projects" },
  { url: "/contact", name: "contact" },
];

export default function Home() {
  return (
    <Layout siteMap={siteMenu}>
      <LandingPage />
      <LandingPage />
      <LandingPage />
    </Layout>
  );
}
