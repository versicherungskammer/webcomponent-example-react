import React from "react";
import Table from "./table";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  container: {
    width: "auto",
    //padding: 0 1rem,
    marginLeft: "auto",
    marginRight: "auto",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  }
});

class App extends React.Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "IT-Spezialist"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ],
    open: false
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <div className="container">
          <Table
            characterData={this.state.characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </main>
    );
  }
}

export default withStyles(styles)(App);
