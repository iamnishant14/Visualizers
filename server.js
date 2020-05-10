import ServerRouter from "./routes/ServerRouter";

const express = require("express");
const app = express();
const cors = require('cors');
const responseTime = require('response-time');
const path = require('path');
const port = process.env.PORT || 8000;
const serverRouter = new ServerRouter()
app.use(cors());
app.use('/', serverRouter.getRouter());
app.use(responseTime());
app.use(express.static(path.join(__dirname + "/client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build', 'index.html'));
});

const server = app.listen(port, () => {
    console.log('App listening to port ' + port);
});