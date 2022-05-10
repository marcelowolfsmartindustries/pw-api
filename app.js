require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const router = require('./routes/index.js');

async function main() {
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/api/', router);

    (async () => {
        const database = require('./data/context/db');
        const Student = require('./data/entities/student');
        const User = require('./data/entities/user');
     
        try {
            const result = await database.sync({ force: false,  alter: true });
    
        } catch (error) {
            console.info(error);
        }
    })();
    

    const port = process.env.PORT || 8080;
    app.listen(port, () => {
        console.log('Express server listening on port', port)
    });
}

main();