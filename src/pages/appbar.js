import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getStepContent } from "./_Checkout";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  submit: {
    marginTop: theme.spacing.unit * 0
  }
});

function clickHandler(step) {
  return getStepContent(step);
}

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Router>
            <Route
              children={() => (
                <Link
                  className={classes.grow}
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "white"
                  }}
                  onClick={clickHandler(0)}
                >
                  <Typography variant="h6" color="inherit">
                    Versicherungskammer Bayern
                  </Typography>
                </Link>
              )}
            />
          </Router>
          <Router>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <Route
                children={() => (
                  <Link
                    to="/signin"
                    style={{
                      textDecoration: "none",
                      color: "inherit"
                    }}
                    onClick={clickHandler(4)}
                  >
                    Einloggen
                  </Link>
                )}
              />
            </Button>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
