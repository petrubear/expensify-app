/* eslint-disable no-undef */
const moment = jest.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};
