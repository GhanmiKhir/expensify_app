import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import Expensessummery from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <div>
    <Expensessummery />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
