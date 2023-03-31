import app from './app.js'

import {database} from './db/db.js'


// Listening the Server 
app.listen(process.env.PORT, () => {
    console.log(`Server is Running on : ${process.env.FRONT_END_URL} in ${process.env.NODE_ENV} Mode `);
  });
  