import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class App extends Component {
  state = {
    subject: '',
    subject_dependent: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
      subject_dependent: test,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);

    const date = data.get('date');
    const field = data.get('field');
    const trial = data.get('trial');
    const plot = data.get('plot');
    const height = data.get('height');
    const weight = data.get('weight');
    const edible_mass = data.get('edible_mass');

    let inputs = [
      height,
      weight,
      edible_mass,
    ]

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i]) {
        console.log(`
          date ${date}\n
          field ${field}\n
          trial ${trial}\n
          plot ${plot}\n
          input ${inputs[i]}`);
      }
    }
  }

  render() {
    const { classes } = this.props;

    return (
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              PhenoType Form
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Date"
                  type="datetime-local"
                  name="date"
                  defaultValue="2018-11-03T10:30"
                  required
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Field"
                  name="field"
                  required
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Trial"
                  name="trial"
                  required
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Plot"
                  name="plot"
                  required
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Height"
                  name="height"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Weight"
                  name="weight"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Edible Mass"
                  name="edible_mass"
                />
              </FormControl>
              {this.state.subject_dependent}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
            </Button>
            </form>
          </Paper>
        </main>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
