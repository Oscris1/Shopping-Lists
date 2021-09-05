import React from 'react';
import {render} from '@testing-library/react-native';

import SortButton from './SortButton';

it('rendering a SortButton with a value of true', () => {
  const {getByText, queryByText} = render(
    <SortButton toggle={true} onPress={() => {}} />,
  );
  expect(getByText('from the newest')).toBeTruthy();
  expect(queryByText('from the oldest')).toBeFalsy();
});

it('rendering a SortButton with a value of false', () => {
  const {getByText, queryByText} = render(
    <SortButton toggle={false} onPress={() => {}} />,
  );
  expect(getByText('from the oldest')).toBeTruthy();
  expect(queryByText('from the newest')).toBeFalsy();
});
