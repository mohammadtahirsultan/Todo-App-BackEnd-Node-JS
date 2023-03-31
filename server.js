import app from './app.js'

import {database} from './db/db.js'


// Listening the Server 
app.listen(process.env.PORT, () => {
    console.log(`Server is Running on Port ${process.env.PORT}`);
  });
  