import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import { WorkCardProps } from "@types";

const WorkCard: React.FC<WorkCardProps> = ({ workHistory }) => {
  const theme = useTheme();
  const { company, description, subtitle, url } = workHistory;
  return (
    <Card
      variant="elevation"
      sx={{
        display: "flex",
        flex: "1 1",
        flexDirection: "column",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="white">
          {company}
        </Typography>
        <Typography variant="subtitle1" fontSize="14px" color="ActiveCaption">
          {subtitle}
        </Typography>
        <Typography variant="body1" color="white">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <a
            style={{
              textDecoration: "unset",
              color: "unset",
            }}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Launch sx={{ color: "secondary.main" }} />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default WorkCard;
