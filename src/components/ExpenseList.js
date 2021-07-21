/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List!</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem {...expense} key={expense.id}/>;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters),
    };
};
// const ConnectedExpenseList = connect((state) => {
export default connect(mapStateToProps)(ExpenseList);

// export default ConnectedExpenseList;

