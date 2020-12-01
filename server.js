const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/connect');
const recipesRoutes = require('./routes/recipesRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(recipesRoutes);

port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App is running on port ${port}`));
