const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.set("strictQuery", false);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`connnection successful`);
}).catch((err) => console.log(`no connection` + err));