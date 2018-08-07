import React from 'react';
import Tab from 'Root/configs/Tab';

import ReadLeague from './ReadLeague';
import CreateLeague from './CreateLeague';
import DeleteLeague from './DeleteLeague';
import UpdateLeague from './UpdateLeague';

const tabs = [
  { label: 'ساخت لیگ', Comp: CreateLeague },
  { label: 'حذف لیگ', Comp: DeleteLeague },
  { label: 'به روز رسانی لیگ', Comp: UpdateLeague },
  { label: 'لیگ ها', Comp: ReadLeague },
];

export default () =>
  <div style={{ width: '100%' }}>
    <Tab tabs={tabs} />
  </div>;
