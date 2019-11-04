const express = require('express');
const routes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
const cors = require('cors');

let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/tasks', tasksRoutes);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});