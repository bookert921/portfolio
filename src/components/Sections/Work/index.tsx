import { Grid } from "@mui/material";
import workHistory from "@assets/documents/data/work-history.json";
import WorkCard from "@components/Card/WorkCard";
import WorkText from "./WorkText";
import { WorkList, WorkSection } from "./WorkElements";
import SEO from "@components/SEO";
import React from "react";

const Work: React.FC = () => {
  const workCards = workHistory.map((job, index) => {
    return (
      <Grid
        key={index}
        component="article"
        item
        xs={12}
        md={4}
        minWidth="300px"
      >
        <WorkCard workHistory={job} />
      </Grid>
    );
  });

  return (
    <WorkSection id="work" component="section">
      <WorkText />
      <WorkList container spacing={2}>
        {workCards}
      </WorkList>
    </WorkSection>
  );
};

export default Work;
