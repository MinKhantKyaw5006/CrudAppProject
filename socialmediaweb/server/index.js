import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express ();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

mongoose
.connect("mongodb+srv://minkhantkyaw:6410935@clusterchrip.fv9nmdo.mongodb.net/chripdatabase?retryWrites=true&w=majority"
, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>app.listen(5000,()=>console.log("Listening")))