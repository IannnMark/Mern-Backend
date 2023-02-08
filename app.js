const express = require('express');

const app = express();
// mongoose.set('strictQuery', false);


const products = require('./routes/product');
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());
app.use('/api/v1', products);

app.use('/api/v1',auth);

module.exports = app






// const express = require('express');

// const app = express();



// app.use(express.json());



// const products = require('./routes/product');



// app.use('/api/v1',products);

// module.exports = app