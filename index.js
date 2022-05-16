const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const conn = require("./db/conn");
const userRouter = require("./routers/userRouter");

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

app.use((req, res, next) => {
    res.status(404).redirect("/error");
});

conn.sync()
    .then(app.listen(3000))
    .catch((err) => { console.log(err) });
    