/* eslint-disable no-undef */
import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if not expenses', () => {
    const total = getExpensesTotal();
    expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
    const expense = expenses[0];
    const total = getExpensesTotal([{...expense}]);
    expect(total).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});
