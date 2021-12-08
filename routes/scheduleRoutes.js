const scheduleRouter = require('express').Router();
const { scheduleRemindermail } = require('../controller/mailController');

scheduleRouter.post('/mail', scheduleRemindermail);

module.exports = scheduleRouter;