import { SiteConfig } from "@types";
import { GitHub, LinkedIn } from "@mui/icons-material";
import OptimizationSVG from "@components/Hexagon/OptimizationSVG";
import MobileSVG from "@components/Hexagon/MobileSVG";
import PerformanceSVG from "@components/Hexagon/PerformanceSVG";
import SecureSVG from "@components/Hexagon/SecureSVG";

export default {
  pageLinks: [
    { url: "about", name: "about" },
    { url: "work", name: "work" },
    // { url: "projects", name: "projects" },
    { url: "contact", name: "contact" },
  ],
  workHistory: [
    {
      company: "US BioTek Labs",
      subtitle: "Constructing A Payment Processing System",
      description:
        "BioTek Labs is a testing lab in the Health industry now providing patients and doctors to more easily fill out forms, order test kits, and receive results. Need a Covid test kit?",
      url: "https://www.usbiotek.com/",
    },
    {
      company: "Datafi Labs",
      subtitle: "Designing and Building A Big Data Dashboard",
      description:
        "Datafi Labs is a data enablement platform meant to bridge the current gap between data visualization and data management. The dashboard allows for data providers and data consumers to quickly access the data they need through quick actions, recommendations and a search bar, much like google search but for company specific data shared by data owners. Looking for a better way to share and set permissions on your data in a variety of formats?",
      url: "https://datafilabs.com/",
    },
  ],
  socialMedia: [
    {
      url: "https://github.com/bookert921",
      name: "github",
      icon: GitHub,
    },
    {
      url: "https://linkedin.com/in/bookert921",
      name: "linkedin",
      icon: LinkedIn,
    },
  ],
  features: [
    {
      title: "Optimize",
      text: "Continually enhanced web products through research, testing, and strategic design",
      icon: OptimizationSVG,
    },
    {
      title: "Secure",
      text: "Trust that your data is secure from attackers and fault tolerant against natural disasters",
      icon: SecureSVG,
    },
    {
      title: "Perform",
      text: "Blazing fast performance utilizing the latest and greatest technologies like GatsbyJS for SSG/SSR to push your product forward and make sure you never get left behind",
      icon: PerformanceSVG,
    },
    {
      title: "Reach",
      text: "High availability through cloud-based architecture and resources like Google Cloud Platform or Amazon Web Services",
      icon: MobileSVG,
    },
  ],
} as SiteConfig;
