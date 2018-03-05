import client from "./database/pg-client";

export default {
  getAll: () => client.connect()
    .then(() => client.query(`select * from items`))
    .then(({rows}) => client.end().then(() => rows)),
}
