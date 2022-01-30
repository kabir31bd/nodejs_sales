
const app = require('./app');

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    var datetime = new Date();
    var message = "Server is running on port:" + PORT + " Started at: " + datetime;
    console.log(message);
});



