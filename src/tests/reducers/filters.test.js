import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  });
  expect(state.text).toBe('bill');
});

test('Should set startDate', () => {
  const startDate = moment(0).add(4, 'days');
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate
  });
  expect(state.startDate).toEqual(startDate);
});

test('Should set endDate', () => {
  const endDate = moment(0).add(5, 'days');
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate
  });
  expect(state.endDate).toEqual(endDate);
});
