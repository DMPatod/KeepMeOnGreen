import React, { useCallback, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FileInput } from "../components/Inputs";

const useStyles = makeStyles((theme) => {
  return {
    pageGrid: {
      padding: theme.spacing(1),
      overflowX: "hidden",
    },
    filterContainer: {
      padding: theme.spacing(1),
    },
    filterGrid: {
      backgroundColor: "white",
    },
    actionRow: {
      justifyContent: "flex-end",
    },
    resposeGrid: {
      backgroundColor: "white",
    },
    button: {
      // margin: theme.spacing(1),
    },
  };
});

const Home = (props) => {
  const classes = useStyles();

  const filterState = useState({});

  return (
    <Grid container justify="center" className={classes.pageGrid}>
      <Grid item sm={6} className={classes.filterGrid}>
        <Grid item sm={12}>
          <Grid container>
            <IconButton onClick={() => console.log("back")}>
              <FaChevronCircleLeft />
            </IconButton>
            <Typography variant="h4" className={classes.titleGrid}>
              <strong>Vesting Importer</strong>
            </Typography>
          </Grid>
          <FileInput
            name="vestingFile"
            label="Vesting .CSV"
            useState={filterState}
          />
          <Button onClick={useCallback(() => console.log(filterState))}>
            console
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
