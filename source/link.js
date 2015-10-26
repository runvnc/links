// link.js
import level from 'level';
import {promisifyAll} from 'bluebird';
import {generate} from 'shortid';

const db = level('links');
promisifyAll(db);

export async function save(link) {
  const id = generate();
  link.time = Date.now();
  await db.put(id, JSON.stringify(link));
  return id;
}

