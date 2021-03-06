import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
// muevo este import a app.js para facilitar las pruebas
// import 'react-dates/lib/css/_datepicker.css';

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
            action: props.expense ? 'edit' : 'new',
        };
    }

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
            <form
                className="form"
                onSubmit={this.onSubmit}>
                {this.state.error !== '' && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    className="text-input"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
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
                    className="textarea"
                    placeholder="Add a note (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">{this.state.action === 'new' ? 'Add Expense' : 'Edit Expense'}</button>
                </div>
            </form>
        );
    }
}

