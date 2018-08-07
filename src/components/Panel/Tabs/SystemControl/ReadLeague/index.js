import Table from 'Root/configs/Table';
import React, { Component } from 'react';
import { serverData } from 'Root/config';
import Menu from '@material-ui/core/Menu';
import isObject from 'Root/configs/isObject';
import Snackbar from 'Root/configs/Snackbar';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
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
    id: '',
    body: [],
    filter: '',
    anchorEl: null,
    queryType: null,
    disabled: false,
    showSnackbar: false,
    snackbarMessage: '',
  };

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ disabled: true });

    let leagueQuery = null;

    if (this.state.queryType === 'many') {
      leagueQuery = '/Leagues';
    } else if (this.state.queryType === 'id') {
      leagueQuery = `/Leagues/${this.state.id}`;
    } else {
      leagueQuery = '/Leagues/findOne';
    }

    const URL =
      serverData + leagueQuery + '?access_token=' +
      localStorage.getItem('token') + '&filter=' + this.state.filter;

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

    if (isObject(data)) {
      body.push([data.id, data.name, data.pictureURL]);
    } else {
      for (const i of data) {
        body.push([i.id, i.name, i.pictureURL]);
      }
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

  openMenu = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  chooseMenu = name => () => {
    this.setState({ anchorEl: null, queryType: name });
  }

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
            onChange={this.handleChange('name')}
            className={this.props.classes.input}
          />

          <TextField
            autoFocus
            type='text'
            label='ای دی'
            name='id'
            placeholder='ID'
            value={this.state.id}
            onChange={this.handleChange('id')}
            className={this.props.classes.input}
          />

          <Button
            color='primary'
            variant='contained'
            aria-haspopup='true'
            onClick={this.openMenu}
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
            className={this.props.classes.arrowDown}
          >
            نحوه جستجو
          </Button>

          <Menu
            onClose={this.closeMenu}
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
          >
            <MenuItem onClick={this.chooseMenu('one')}>
              جستجوی یک دانه ای
            </MenuItem>

            <MenuItem onClick={this.chooseMenu('many')}>
              جستجوی چند تایی
            </MenuItem>

            <MenuItem onClick={this.chooseMenu('id')}>
              جستجو با آی دی
            </MenuItem>
          </Menu>

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
