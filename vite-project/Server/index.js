const express = require("express");
const cors = require("cors");
const app = express();
require("./db.js");
const port = 3200;
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/auth", require("./routes/events.js"));
app.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`);
});

app.listen(port, () => {
    console.log(`server is listening at port: ${port}`);
});
