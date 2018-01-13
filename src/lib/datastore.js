/**
 * Wrapper around Google Cloud Datastore
 *
 * @see https://cloud.google.com/nodejs/docs/reference/datastore/1.3.x/
 */
const datastore = require('@google-cloud/datastore');

// TODO: Need to read more about datastore to figure out how to
// optimize my data structure.
class DB {
  constructor() {
    // todo: Move projectID into env?
    this.db = new datastore({ projectId: 'reactions-ejd' });
  }

  get(key) {}
  set(key) {}
  increment(key) {}
  decrement(key) {}
}

module.exports = DB;
