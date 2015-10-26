// server.js
import {save} from './link';
import shortrest from 'shortrest';

const web = shortrest(8099), user = 'test';

web.post('/link', async (req, res) => {
  try {
    const {descr, URL} = req.params; 
    res.json(await save({descr, URL, user}));
  } catch (e) {
    res.json({error: {message: e.message}});
  }
});

