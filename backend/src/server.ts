import express, { json } from 'express';
import {routes} from './routes/router';

const app = express();
app.use(json());

app.use(routes);

app.listen('3333', ()=>{
  console.log("server running!")
});