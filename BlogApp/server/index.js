// // require('dotenv').config()

// import dotenv from 'dotenv';
// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import connectToDatabase from './database/db.js';
// import Router from './routes/route.js';

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(cors());
// app.use('/', Router)

// app.use(bodyParser.json({extended: true}));
// app.use(bodyParser.urlencoded({extended: true}));



// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;


// connectToDatabase(username, password);



import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDatabase from './database/db.js';
import Router from './routes/route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Apply middleware before defining routes
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connectToDatabase(username, password);
