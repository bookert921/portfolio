import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Sidebar: React.FC<{ open: boolean }> = ({ open }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "none",
        [theme.breakpoints.down("tablet")]: {
          display: "flex",
          minHeight: "100vh",
          width: "min(75vw, 400px)",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: theme.palette.primary.main,
          visibility: open ? "visible" : "hidden",
          transform: `translateX(${open ? 0 : 100}vw)`,
          transition:
            "transform 0.5s ease, visibility 1s ease",
        },
      }}
    ></Box>
  );
};

export default Sidebar;
