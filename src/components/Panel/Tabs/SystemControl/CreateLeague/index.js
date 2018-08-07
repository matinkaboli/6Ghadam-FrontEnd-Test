import React, { Component } from 'react';
import { serverData } from 'Root/config';
import Snackbar from 'Root/configs/Snackbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  }
};

class CreateLeague extends Component {
  state = {
    name: '',
    errors: {},
    disabled: false,
    showSnackbar: false,
    snackbarMessage: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ errors: {} });

    if (!this.state.name) {
      return this.setState({
        errors: {
          name: {
            message: 'وارد کردن نام لیگ الزامی است',
          },
        },
      });
    }

    this.setState({ disabled: true });

    const data = await
      fetch(
        `${serverData}/Leagues?access_token=${localStorage.getItem('token')}`,
        {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify({
            name: this.state.name,
          }),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then(res => res.json());

    if (data.id) {
      this.setState({
        name: '',
        showSnackbar: true,
        snackbarMessage: 'لیگ با موفقیت ساخته شد.',
      });
    } else {
      this.setState({
        showSnackbar: true,
        snackbarMessage: 'خطا! بعدا امتحان کنید!',
      });
    }

    this.setState({ disabled: false });
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
          message={this.state.snackbarMessage}
          onClose={this.handleCloseSnackbar}
        />

        <form onSubmit={this.handleSubmit} className={this.props.classes.root}>
          <TextField
            autoFocus
            name='name'
            type='text'
            label='نام'
            value={this.state.name}
            onChange={this.handleChange}
            error={this.state.errors.name && true}
            helperText={
              this.state.errors.name &&
              this.state.errors.name.message
            }
          />

          <Button
            size='small'
            type='submit'
            color='secondary'
            variant='contained'
            disabled={this.state.disabled}>
            ثبت لیگ
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(CreateLeague);
