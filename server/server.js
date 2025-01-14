const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const db =mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'db'
})

db.connect((err) => {
    if (err){
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySql database');
});


const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors(corsOptions))

app.post('/submit', (req, res) => {
    const { Username, Email, Address, Gender } = req.body;

    const query = 'INSERT INTO form ( Username, Email, Address, Gender) VALUES (?,?,?,?)';
    db.query(query, [ Username, Email, Address, Gender], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.status(200).send('Submit completed');
    });
});

app.get('/table', (req, res)=> {
    const query = 'SELECT * FROM form';
    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.json(results);
    });
});

app.get('/api', (req, res) => {
    res.json({messgae: 'Hello from server!'});
});

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});