import express from 'express';
import { tempData } from './temp-data';
import { serverAPIPort, APIPath} from '@fed-exam/config';


console.log('starting server', { serverAPIPort, APIPath});

const app = express();

const url  = require('url');


let PAGE_SIZE = 20;


app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});


/** search by words or strings with search query, change page with page query */
app.get(APIPath, (req, res) => {
  
  // @ts-ignore
  const page: number = req.query.page || 1;
  const search: string = url.parse(req.url,true).query.search || '';

  const tickets = tempData.filter((ticket) => 
  (search.split(',').every(x => 
    (ticket.title.toLowerCase() + ticket.content.toLowerCase()).includes(x.replace(/["]+/g, '')))))
  
  const paginatedData = tickets.slice((page - 1) * (PAGE_SIZE), page * (PAGE_SIZE));
  
  res.send(paginatedData);

});




app.listen(serverAPIPort);
console.log('server running', serverAPIPort)

