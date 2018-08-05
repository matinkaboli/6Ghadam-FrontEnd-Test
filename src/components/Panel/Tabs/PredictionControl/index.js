import React from 'react';
import Tab from 'Root/configs/Tab';

import Update from './Update';
import DataSurvey from './DataSurvey';
import FurtherInfo from './FurtherInfo';
import NewPrediction from './NewPrediction';
import ManagePredictions from './ManagePredictions';
import PredictionsCollection from './PredictionsCollection';

const tabs = [
  { label: 'داده های آماری', Comp: DataSurvey },
  { label: 'مدیریت پیش بینی ها', Comp: ManagePredictions },
  { label: 'پیش بینی جدید', Comp: NewPrediction },
  { label: 'به روز رسانی', Comp: Update },
  { label: 'مجموعه پیش بینی', Comp: PredictionsCollection },
  { label: 'اطلاعات تکمیلی', Comp: FurtherInfo },
];


export default () =>
  <div style={{ width: '100%' }}>
    <Tab tabs={tabs} />
  </div>;
