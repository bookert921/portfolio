import WorkCard from "@components/Card/WorkCard";
import WorkHeader from "@components/Header/WorkHeader";
import React from "react";
import { Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { siteData } from "@configs";

const WorkSection = styled(Box, {
  name: "WorkSection",
})(({ theme }) => ({
  width: "90%",
  margin: "0 auto",
  display: "flex",
  paddingBottom: theme.spacing(5),
  flexDirection: "column",
}));

const WorkList = styled(Grid, {
  name: "WorkGrid-container",
})(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    justifyContent: "center",
    marginTop: theme.spacing(5),
  },
}));

const Work: React.FC = () => {
  const { workHistory } = siteData;
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
      <WorkHeader />
      <WorkList container spacing={2}>
        {workCards}
      </WorkList>
    </WorkSection>
  );
};

export default Work;
