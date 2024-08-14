const fs = require('fs');
const mongoose = require('mongoose');
const Data = require('./models/Data');

mongoose.connect('mongodb://localhost:27017/dashboardDB')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

fs.readFile('jsondata.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file', err);
        return;
    }

    const jsonData = JSON.parse(data);

    Data.insertMany(jsonData)
        .then(docs => {
            console.log('Data inserted successfully');
            mongoose.connection.close();
        })
        .catch(err => {
            console.error('Error inserting data', err);
            mongoose.connection.close();
        });
});
