const express = require ("express");
const app = express ();
const cors = require('cors');
app.use(express.json());
const db_connect = require("./connect_db");
app.use(cors());
require("dotenv").config();
//connexion db
db_connect();

//routes
app.use("/user", require("./routes/user"));
app.use("/cat", require("./routes/cat"));
app.use("/dog", require("./routes/dog"));
app.use("/veterinarian", require("./routes/veterinarian"));
app.use("/question", require("./routes/question"));
app.use("/comment", require("./routes/comment"));
app.use("/adoptCat", require("./routes/adopt_cat"));
app.use("/adoptDog", require("./routes/adopt_dog"));
1
//server
const PORT = process.env.PORT ;
app.listen( PORT , 
    (err) => err?console.log(err): console.log(`server is running on ${PORT}!`)
    );
