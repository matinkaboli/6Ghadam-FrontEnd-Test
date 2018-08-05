import Table from 'Root/configs/Table';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Autocomplete from 'Root/configs/Autocomplete';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    height: 14,
    marginRight: 50,
  },
  inputContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    margin: '10px 50px 10px 50px',
  },
};

class FurtherInfo extends Component {
  state = {
    select: '',
  }

  handleChange = value => {
    this.setState({ select: value });
  };

  render() {
    const head = [
      'شماره تخمین',
      'شماره کاربری',
      'زمان ثبت',
      'زمان بررسی',
      'وضعیت',
      'عملیات'
    ];

    const options = [
      'متین',
      'علی',
      'معین',
      'امیر',
    ];

    return (
      <div>
        <div className={this.props.classes.inputContainer}>
          <Autocomplete
            options={options}
            value={this.state.select}
            handleChange={this.handleChange}
            className={this.props.classes.input}
            placeholder='یک پیش بینی را انتخاب کنید'
          />

          <Button
            size='small'
            color='primary'
            variant='contained'
            className={this.props.classes.button}
          >
            جستجو
          </Button>
        </div>

        <Table head={head} body={[]} />
      </div>
    );
  }
}

export default withStyles(styles)(FurtherInfo);
