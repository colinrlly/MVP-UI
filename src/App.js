import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import { MenuItem, Typography } from '@material-ui/core';

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
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h5" component="h5">
              PhenoType Form
            </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" fullWidth>
              <TextField
                label="Date"
                type="datetime-local"
                name="date"
                defaultValue="2018-11-03T10:30"
              />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Field"
                  name="field"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Trial"
                  name="trial"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Plot"
                  name="plot"
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <TextField
                  label="Subject"
                  name="subject"
                  select
                  value={this.state.subject}
                  onChange={this.handleChange('subject')}
                >
                  <MenuItem key='height' value="1">Height</MenuItem>
                  <MenuItem key='weight' value="2">Weight</MenuItem>
                  <MenuItem key='edible mass' value="3">Edible Mass</MenuItem>
                </TextField>
              </FormControl>
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
