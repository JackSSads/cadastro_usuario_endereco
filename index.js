const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const userRouter = require("./routers/userRouter");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static("public"));

app.use("/", userRouter);

conn.sync()
    .then(app.listen(3000))
    .catch((err) => { console.log(err) });