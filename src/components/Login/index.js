import { validateAll } from 'indicative';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Snackbar from 'Root/configs/Snackbar';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import ValidationFormatter from 'Root/configs/ValidationFormatter';

const styles = theme => ({
  logo: {
    paddingTop: 7,
    width: 50,
    height: 50,
  },
  form: {
    'padding': 16,
    '& input': {
      direction: 'rtl', // It will be reversed by JSS
      textAlign: 'right' // It will be reversed by JSS
    }
  },
  paper: {
    width: 420,
    overflow: 'hidden',
  },
  button: {
    marginTop: 20
  },
  header: {
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

class Login extends Component {
  state = {
    form: {},
    errors: {},
    logged: false,
    disabled: false,
    showSnackbar: false,
    snackbarMessage: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value,
      }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { form } = this.state;

    const rules = {
      email: 'email|required',
      password: 'required',
    };

    const messages = {
      'email.email': 'ایمیل اشتباه است.',
      'email.required': 'وارد کردن ایمیل الزامی است.',
      'password.required': 'وارد کردن رمز عبور الزامی است.',
    };

    try {
      await validateAll(form, rules, messages, ValidationFormatter);

      this.setState({ errors: {} });
    } catch (errors) {
      return this.setState({ errors });
    }

    this.setState({ disabled: true });

    const data = await
      fetch('https://aaa-6ghadam.herokuapp.com/api/clients/login', {
        body: JSON.stringify({
          email: form.email,
          realm: 'Organization',
          password: form.password,
        }),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => res.json());

    this.setState({ disabled: false });

    if (data.id && data.ttl) {
      localStorage.removeItem('token');
      localStorage.setItem('token', data.id);

      this.setState({ logged: true });
    } else if (data.error.statusCode === 400) {
      this.setState({
        showSnackbar: true,
        snackbarMessage: 'خطا! بعدا امتحان کنید',
      });
    } else if (data.error.statusCode === 401) {
      this.setState({
        showSnackbar: true,
        snackbarMessage: 'ایمیل یا رمز عبور اشتباه است',
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
    const { errors, logged, showSnackbar, snackbarMessage } = this.state;
    const { classes } = this.props;

    if (logged) {
      return <Redirect to='/panel' />;
    }

    return (
      <div className={classes.container}>
        <Snackbar
          open={showSnackbar}
          message={snackbarMessage}
          onClose={this.handleCloseSnackbar}
        />

        <Paper className={classes.paper}>
          <header className={classes.header}>
            <Link to='/'>
              <img
                src='/static/images/logo.svg'
                className={classes.logo}
              />
            </Link>
          </header>

          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              autoFocus
              name='email'
              label='ایمیل'
              placeholder='Email'
              onChange={this.handleChange}
              error={errors.email && true}
              helperText={errors.email && errors.email.message}
            />

            <TextField
              fullWidth
              margin='normal'
              name='password'
              type='password'
              label='رمز عبور'
              placeholder='Password'
              onChange={this.handleChange}
              error={errors.password && true}
              helperText={errors.password && errors.password.message}
            />

            <Button
              fullWidth
              type='submit'
              variant='raised'
              color='secondary'
              className={classes.button}
              disabled={this.state.disabled}
            >
              ورود
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
