/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { FC } from 'react';
import { LineSeries, ScaleType, CurveType } from '@elastic/charts';
import { seriesStyle, LINE_COLOR } from '../common/settings';

interface Props {
  chartData: any[];
}

const SPEC_ID = 'line';

const lineSeriesStyle = {
  ...seriesStyle,
};

export const Line: FC<Props> = ({ chartData }) => {
  return (
    <LineSeries
      id={SPEC_ID}
      xScaleType={ScaleType.Time}
      yScaleType={ScaleType.Linear}
      xAccessor={'time'}
      yAccessors={['value']}
      data={chartData}
      yScaleToDataExtent={false}
      curve={CurveType.CURVE_MONOTONE_X}
      lineSeriesStyle={lineSeriesStyle}
      customSeriesColors={[LINE_COLOR]}
    />
  );
};
