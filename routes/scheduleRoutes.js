const scheduleRouter = require('express').Router();
const { scheduleRemindermail, cancelSchedule } = require('../controller/mailController');

scheduleRouter.post('/mail', scheduleRemindermail);
scheduleRouter.delete('/cancel/:id', cancelSchedule);

module.exports = scheduleRouter;