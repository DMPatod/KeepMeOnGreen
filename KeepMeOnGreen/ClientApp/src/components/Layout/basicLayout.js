import React from "react";
import {
  AppBar,
  Box,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { FaBars } from "react-icons/fa";
import Copyright from "./copyright";

const useStyle = makeStyles((theme) => {
  const drawerWidth = 0;
  return {
    root: {
      display: "flex",
      margin: -theme.spacing(1),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    content: {
      flexGrow: 1,
      overflow: "auto",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    appBarSpacer: theme.mixins.toolbar,
    appView: {
      padding: theme.spacing(1),
      // position: "relative",
      // height: "100%",
    },
    footerBar: {
      position: "absolute",
      bottom: 0,
      width: `calc(100% - ${drawerWidth + 1}px)`,
    },
  };
});

const BasicLayout = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
            onClick={() => console.log("open pop-up menu")}
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container className={classes.appView}>
          {props.children}
        </Grid>
        <Box pt={4} className={classes.footerBar}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
};

export default BasicLayout;
