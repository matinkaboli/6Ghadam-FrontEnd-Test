import React from 'react';
import Tab from 'Root/configs/Tab';

import CreateLeague from './CreateLeague';
import DeleteLeague from './DeleteLeague';
import UpdateLeague from './UpdateLeague';

const tabs = [
  { label: 'ساخت لیگ', Comp: CreateLeague },
  { label: 'حذف لیگ', Comp: DeleteLeague },
  { label: 'به روز رسانی لیگ', Comp: UpdateLeague },
];

export default () =>
  <div style={{ width: '100%' }}>
    <Tab tabs={tabs} />
  </div>;
