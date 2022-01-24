import { Grid } from "@mui/material";
import workHistory from "@assets/documents/data/experience.json";
import WorkCard from "@components/Card/WorkCard";
import WorkText from "./WorkText";
import { WorkList, WorkWrapper } from "./WorkElements";

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
    <WorkWrapper id="work" as="section" maxWidth={"sm"}>
      <WorkText />
      <WorkList container spacing={2}>
        {workCards}
      </WorkList>
    </WorkWrapper>
  );
};

export default Work;
