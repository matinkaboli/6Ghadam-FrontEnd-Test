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

class DeleteLeague extends Component {
  state = {
    id: '',
    errors: {},
    disabled: false,
    showSnackbar: false,
    snackbarMessage: '',
  };

  handleChange = e => {
    this.setState({ id: e.target.value });
  }

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

    this.setState({ disabled: true });

    const data = await
      fetch(serverData + '/Leagues/' + this.state.id +
        '?access_token=' + localStorage.getItem('token'),
        {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      ).then(res => res.json());

    if (data.count) {
      this.setState({
        id: '',
        showSnackbar: true,
        snackbarMessage: 'لیگ با موفقیت حذف شد.',
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
            label='ای دی'
            value={this.state.id}
            onChange={this.handleChange}
            error={this.state.errors.id && true}
            helperText={
              this.state.errors.id &&
              this.state.errors.id.message
            }
          />

          <Button
            size='small'
            type='submit'
            color='secondary'
            variant='contained'
            disabled={this.state.disabled}>
            حذف لیگ
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(DeleteLeague);
