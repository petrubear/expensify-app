import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy,
    };
};

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy,
    };
};

const resetCount = () => {
    return {
        type: 'RESET',
    };
};

const setCount = ({count}) => {
    return {
        type: 'SET',
        count: count,
    };
};

// reducer
// 1 reducers are pure functions
// 2 never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
    case 'INCREMENT':
        return {
            count: state.count + action.incrementBy,
        };
    case 'DECREMENT':
        const decrementBy =
            typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy,
        };
    case 'RESET':
        return {
            count: 0,
        };
    case 'SET':
        return {
            count: action.count,
        };
    default:
        return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({
    incrementBy: 5,
}));

// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({
    decrementBy: 10,
}));

store.dispatch(setCount({
    count: 101,
}));
