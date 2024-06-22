const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const port= process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const dbConnect = require('./config/database');
dbConnect();

const routes =require('./routes/route');
app.use(routes);

app.listen(port,()=>{
    console.log(`app is run on port ${port}`);
});