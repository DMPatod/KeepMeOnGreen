import React from "react"

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

const IntroLayout = (props) => {
  return (

  )
}