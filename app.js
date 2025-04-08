const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const { createBabysittersTable } = require('./tables/babysitter.js');
const { createPayments_table } = require('./tables/payments.js');
const { createschedules_table } = require('./tables/schedules.js');
const { createattendence_table } = require('./tables/attendence.js');



const babysittersRoutes = require('./routes/babysitters.js');
const paymentRoutes = require('./routes/payment.js');
const schedulesRoutes = require('./routes/schedules.js');
const attendanceRoutes = require('./routes/attendence.js');


const app = express();


app.use(bodyParser.json());


require('dotenv').config();


app.use('/babysitters', babysittersRoutes);
app.use('/payments', paymentRoutes);
app.use('/schedules', schedulesRoutes);
app.use('/attendance', attendanceRoutes);






app.listen(3000, () => {
    console.log(`Server is running on port port${3000}`)
    createBabysittersTable();
    createPayments_table();
    createschedules_table();
    createattendence_table();
});


