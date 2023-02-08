const app = require('./app');

const connectDatabase = require("./config/database")

const path = require("path")



const dotenv = require('dotenv');



dotenv.config({path: '.env'});
connectDatabase();



app.listen(process.env.PORT, () => {

	console.log(`server started on port:' ${process.env.PORT} in ${process.env.NODE_ENV} mode`);

});




// const express = require("express"),
// app = express(),
// products = require("./routes/product");

// app.use(express.json());
// app.use("/api/v1", products);
// module.exports = app;