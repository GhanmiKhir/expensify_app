import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set dfault state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remvoe expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remvoe expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Transport',
    note: '',
    amount: 900,
    createdAt: moment(0)
      .subtract(2, 'days')
      .valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Yearly rent'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe('Yearly rent');
});

test('Should not edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Yearly rent'
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
