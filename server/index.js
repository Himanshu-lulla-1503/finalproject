const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT||5000;
const server= http.createServer(app);
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config();
require('./models/conn');
const userRouter=require('./routes/users');
app.use('/',userRouter);
server.listen(port,()=>console.log(`listening on port ${port}`));