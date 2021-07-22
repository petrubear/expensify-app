import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: '',
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {
                description: description,
            };
        });
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {
                note: note,
            };
        });
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: amount,
                };
            });
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt: createdAt,
            }));
        }
    };
    onFocusedChange = ({focused}) => {
        this.setState(() => ({
            calendarFocused: focused,
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description & amount',
            }));
        } else {
            this.setState(() => ({
                error: '',
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error !== '' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusedChange}
                        id="date_picker"
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}

