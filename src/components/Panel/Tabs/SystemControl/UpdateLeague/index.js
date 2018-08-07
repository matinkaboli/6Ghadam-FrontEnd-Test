import React, { Component } from 'react';
import { serverData } from 'Root/config';
import Snackbar from 'Root/configs/Snackbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class UpdateLeague extends Component {
  state = {
    id: '',
    name: '',
    newid: '',
    errors: {},
    pictureurl: '',
    disabled: false,
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ errors: {} });

    if (!this.state.id) {
      return this.setState({
        errors: {
          id: {
            message: 'وارد کردن ID لیگ الزامی است',
          },
        },
      });
    }

    if (!this.state.name) {
      return this.setState({
        errors: {
          name: {
            message: 'وارد کردن نام لیگ الزامی است',
          },
        },
      });
    }

    const body = {};

    if (this.state.newid) {
      body.id = this.state.newid;
    }

    if (this.state.name) {
      body.name = this.state.name;
    }

    if (this.state.pictureurl) {
      body.pictureURL = this.state.pictureurl;
    }

    this.setState({ disabled: true });

    const data = await fetch(serverData + '/Leagues/' + this.state.id +
    '?access_token=' + localStorage.getItem('token'), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then(res => res.json());

    this.setState({ disabled: false });

    if (data.error) {
      return this.setState({
        showSnackbar: true,
        snackbarMessage: 'خطا! بعدا امتحان کنید',
      });
    }

    if (data.id) {
      return this.setState({
        showSnackbar: true,
        snackbarMessage: 'لیگ با موفقیت به روز رسانی شد',
      });
    }
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ showSnackbar: false });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.showSnackbar}
          onClose={this.handleCloseSnackbar}
          message={this.state.snackbarMessage}
        />
        <form onSubmit={this.handleSubmit}>
          <TextField
            label='ID'
            name='id'
            type='text'
            value={this.state.id}
            onChange={this.handleChange('id')}
            error={this.state.errors.id && true}
            helperText={
              this.state.errors.id &&
              this.state.errors.id.message
            }
          />

          <TextField
            label='New ID'
            name='newid'
            type='text'
            value={this.state.newid}
            onChange={this.handleChange('newid')}
            error={this.state.errors.newid && true}
            helperText={
              this.state.errors.newid &&
              this.state.errors.newid.message
            }
          />

          <TextField
            label='Name'
            name='name'
            type='text'
            value={this.state.name}
            onChange={this.handleChange('name')}
            error={this.state.errors.name && true}
            helperText={
              this.state.errors.name &&
              this.state.errors.name.message
            }
          />

          <TextField
            label='Picture URL'
            name='pictureurl'
            type='text'
            value={this.state.pictureurl}
            onChange={this.handleChange('pictureurl')}
            error={this.state.errors.pictureurl && true}
            helperText={
              this.state.errors.pictureurl &&
              this.state.errors.pictureurl.message
            }
          />

          <Button
            type='submit'
            color='primary'
            variant='contained'
            disabled={this.state.disabled}
          >تغییر اطلاعات</Button>
        </form>
      </div>
    );
  }
}

export default UpdateLeague;
