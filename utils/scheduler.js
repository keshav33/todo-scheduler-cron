const schedule = require('node-schedule');

let scheduleInstance = null;

exports.initializeSchedule = () => {
    scheduleInstance = schedule
}

exports.getSchedule = () => {
    return scheduleInstance;
}