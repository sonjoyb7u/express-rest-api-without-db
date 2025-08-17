const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Users router lists . . . 
app.use("/users", userRouter);
// Users router lists . . . 

// Home route ... 
app.get("/", (req, res, next) => {
    // res.send("<h2>Home route goes here...</h2>");
    res.sendFile(__dirname + "/views/index.html");
});
// Home route ... 


// Route not found error message ... 
app.use((req, res, next) => {
    res.status(404).json({error_message: "Not Found!"});
});

// Server error message ... 
app.use((err, req, res, next) => {
    res.status(500).json({error_message: "Something went wrong, Internal Server Error!"});
});

module.exports = app;