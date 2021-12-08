const schedule = require('node-schedule');
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.scheduleRemindermail = (req, res) => {
    const { receiverEmail, todo, receiverDate, time } = req.body;
    const reminderDateAndTime = new Date(`${receiverDate}T${time}`);

    const mailOptions = {
        from: process.env.SENDER_EMAILID,
        to: receiverEmail,
        subject: 'You have a todo reminder! please have a look',
        text: todo
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAILID,
            pass: process.env.SENDER_PASSWORD
        }
    });

    schedule.scheduleJob(reminderDateAndTime, () => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    });
    
    res.send('Ok');
}