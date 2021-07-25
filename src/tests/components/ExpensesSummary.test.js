/* eslint-disable no-undef */
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';


test('should render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={100} />);
    expect(wrapper).toMatchSnapshot();
});
