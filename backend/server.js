require('dotenv').config()

const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/health.routes');
const todoRoutes = require('./routes/todo.routes');
const carrouselRoutes = require('./routes/carrousel.routes');

const app = express();

const db = require('./aws');

const PORT = process.env.PORT || 3000;
const API_PATH = process.env.API_PATH || 'default/api';

app.use(cors());
app.use(express.json());


app.use(API_PATH + '/health', healthRoutes);
app.use(API_PATH + '/todo', todoRoutes);
app.use(API_PATH + '/carrousel', carrouselRoutes)


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
