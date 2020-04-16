import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignCenter: true,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" style={{ background: "#660033" }}>
        <Toolbar>
          <Typography variant="h5" align="center" className={classes.root}>
            To Do List - App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
