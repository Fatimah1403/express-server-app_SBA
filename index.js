const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;


const items = require("./routes/itemsRoutes");
const posts = require("./routes/postsRoutes");
const users = require("./routes/usersRoutes");

//middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ extended: true }));
 
// using the middleware
app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/items", items);



// home route
app.get("/", (req, res) => {
    res.send("Home Page");
});
// CUSTOM MIDDLEWARE : 404 NOT FOUND
app.use((req, res) => {
    res.status(404);
    res.json( {error: "Resource not found"} )
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});