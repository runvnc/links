import level from 'level';
const db = level('links');
import {inspect} from 'util';

db.createReadStream()
.on('data', data => {
  console.log(`${data.key}=${inspect(data.value)}`);
});
