const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static(path.join(__dirname, "./styles")));
app.use(express.json());

// const items = require("./routes/itemsRoutes");
// const posts = require("./routes/postsRoutes");
// const users = require("./routes/usersRoutes");

// rendering template pages
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    // console.log("Rendering index")
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about")
});



//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
 
// using the middleware
// app.use("/api/users", users);
// app.use("/api/posts", posts);
// app.use("/api/items", items);



// home route
// app.get("/", (req, res) => {
//     res.send("Home Page");
// });
// CUSTOM MIDDLEWARE : 404 NOT FOUND
app.use((req, res) => {
    res.status(404);
    res.json( {error: "Resource not found"} )
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});