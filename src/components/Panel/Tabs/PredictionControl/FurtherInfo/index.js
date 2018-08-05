import React, { Component } from 'react';
import Table from 'Root/configs/Table';

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

class FurtherInfo extends Component {
  render() {
    return (
      <Table head={head} body={body} />
    );
  }
}

export default FurtherInfo;
