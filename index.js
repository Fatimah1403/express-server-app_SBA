const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

app.use(express.static(path.join(__dirname, "./styles")));
app.use(express.json());

const usersData = require("./data/users");
const itemsData = require("./data/items");
const postsData = require("./data/posts");

// rendering template pages
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// About route
app.get("/about", function(req, res) {
    res.render("about");
});

// Users route
app.get("/users", (req, res) => {
    res.render("users", { usersData });
});

// Posts route
app.get("/posts", (req, res) => {
    res.render("posts", { postsData });
});

// Items route
app.get("/items", (req, res) => {
    res.render("items", { itemsData });
});

// Home route with name parameter
app.get("/:name", (req, res) => {
    const personName = req.params.name;
    res.render("home", { person: personName });
});

// Default home route
app.get("/", (req, res) => {
    const defaultName = "";
    res.render("home", { person: defaultName });
});

// 404 route
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource not found" });
});

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
