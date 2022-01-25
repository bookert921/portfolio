import { Box, styled } from "@mui/material";

export const SidebarWrapper = styled(Box, {
  name: "SidebarWrapper",
})<{ fixedNav: boolean; sideOpen: boolean }>(
  ({ theme, fixedNav, sideOpen }) => ({
    [theme.breakpoints.down("tablet")]: {
      height: "100vh",
      position: "absolute",
      top: fixedNav ? 0 : "unset",
      bottom: 0,
      right: 0,
      zIndex: theme.zIndex.appBar,
      backgroundColor: theme.palette.primary.main,
      width: sideOpen ? "50%" : "0",
      transition: "all 0.5s ease",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  })
);
