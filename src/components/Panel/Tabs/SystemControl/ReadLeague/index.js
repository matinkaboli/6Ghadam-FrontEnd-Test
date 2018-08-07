import Table from 'Root/configs/Table';
import React, { Component } from 'react';
import { serverData } from 'Root/config';
import Snackbar from 'Root/configs/Snackbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  input: {
    direction: 'ltr',
    textAlign: 'left',
  },
};

const head = [
  'ID',
  'نام',
  'لینک عکس',
];

class ReadLeague extends Component {
  state = {
    body: [],
    filter: '',
    disabled: false,
    showSnackbar: false,
    snackbarMessage: '',
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ disabled: true });

    const URL =
      serverData +
      '/Leagues?access_token=' +
      localStorage.getItem('token') +
      '&filter=' + this.state.filter;

    const data = await
      fetch(URL, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(res => res.json());


    if (data.error) {
      return this.setState({
        showSnackbar: true,
        snackbarMessage: 'خطا! بعدا امتحان کنید',
      });
    }

    const body = [];

    for (const i of data) {
      body.push([i.id, i.name, i.pictureURL]);
    }

    this.setState({
      body,
      disabled: false,
    });
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showSnackbar: false });
  };


  render() {
    return (
      <div className={this.props.classes.root}>
        <Snackbar
          open={this.state.showSnackbar}
          message={this.state.snackbarMessage}
          onClose={this.handleCloseSnackbar}
        />

        <form onSubmit={this.handleSubmit} className={this.props.classes.root}>
          <TextField
            autoFocus
            type='text'
            label='فیلتر'
            name='filter'
            placeholder='Filter'
            value={this.state.filter}
            onChange={this.handleChange}
            className={this.props.classes.input}
          />

          <Button
            size='small'
            type='submit'
            color='secondary'
            variant='contained'
            disabled={this.state.disabled}>
            جستجو
          </Button>
        </form>

        <Table head={head} body={this.state.body} />
      </div>
    );
  }
}

export default withStyles(styles)(ReadLeague);
