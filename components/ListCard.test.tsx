import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import ListCard from './ListCard';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

it('rendering ListCard', () => {
  const {getByText, queryByText} = render(
    <ListCard
      id="1"
      name={'first list'}
      createdAt={1630846984242}
      itemsCount={3}
    />,
  );
  expect(getByText('first list')).toBeTruthy();
  expect(getByText('Sun Sep 05 2021')).toBeTruthy();
  expect(queryByText('1630846984242')).toBeFalsy();
  expect(getByText('Items on the list: 3')).toBeTruthy();
  expect(queryByText('Items on the list: 0')).toBeFalsy();
});

it('pressing component', () => {
  const {getByText} = render(
    <ListCard
      id="1"
      name={'first list'}
      createdAt={1630846984242}
      itemsCount={3}
    />,
  );

  fireEvent.press(getByText('first list'));
  expect(mockedNavigate).toHaveBeenCalledTimes(1);
});
