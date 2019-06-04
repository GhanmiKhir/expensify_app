import moment from 'moment';
import selectExpeses from '../../selectors/expenses';

const expenses = [
  {
    id: 1,
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: 1,
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];

test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endtDate: undefined
  };
  const result = selectExpeses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpeses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };
  const result = selectExpeses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('Should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpeses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('Should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpeses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});