import React from 'react';
import Tab from 'Root/configs/Tab';

import DataSurvey from './DataSurvey';
import ManageTransactions from './ManageTransactions';

const tabs = [
  { label: 'داده های آماری', Comp: DataSurvey },
  { label: 'مدیریت تراکنش ها', Comp: ManageTransactions },
];

export default () => <div style={{ width: '100%' }}>
  <Tab tabs={tabs} />
</div>;
