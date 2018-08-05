import React from 'react';
import Tab from 'Root/configs/Tab';

import Update from './Update';
import DataSurvey from './DataSurvey';
import FurtherInfo from './FurtherInfo';
import NewAccuratePrediction from './NewAccuratePrediction';
import ManageAccuratePredictions from './ManageAccuratePredictions';

const tabs = [
  { label: 'داده های آماری', Comp: DataSurvey },
  { label: 'مدیریت پیش بینی های دقیق', Comp: ManageAccuratePredictions },
  { label: 'پیش بینی دقیق جدید', Comp: NewAccuratePrediction },
  { label: 'به روز رسانی', Comp: Update },
  { label: 'اطلاعات تکمیلی', Comp: FurtherInfo },
];

export default () => <div style={{ width: '100%' }}>
  <Tab tabs={tabs} />
</div>;
