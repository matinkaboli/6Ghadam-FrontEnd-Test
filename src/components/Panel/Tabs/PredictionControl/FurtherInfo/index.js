import Table from 'Root/configs/Table';
import React, { Component } from 'react';
import Autocomplete from 'Root/configs/Autocomplete';

const head = [
  'شماره تخمین',
  'شماره کاربری',
  'زمان ثبت',
  'زمان بررسی',
  'وضعیت',
  'عملیات'
];

const body = [
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
];

const options = [
  'متین',
  'علی',
  'معین',
  'امیر',
];

class FurtherInfo extends Component {
  state = {
    select: '',
  }

  handleChange = value => {
    this.setState({ select: value });
  };

  render() {
    return (
      <div>
        <Autocomplete
          options={options}
          value={this.state.select}
          handleChange={this.handleChange}
          placeholder='یک پیش بینی را انتخاب کنید'
        />
        <Table head={head} body={body} />
      </div>
    );
  }
}

export default FurtherInfo;
