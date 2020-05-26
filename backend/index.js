const express = require('express');
const cors = require('cors');
require('./db');

const studyItemRouter = require('./routes/study-item.routes')

const app = express();

app.use(cors());
app.use(express.json());

app.use('/studyitems', studyItemRouter);


const port = process.env.PORT || 5500;


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})