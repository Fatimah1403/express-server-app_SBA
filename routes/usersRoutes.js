// const express = require("express");
// const router = express.Router();

// const users = require("../data/users");

// // INDEX - GET getting all the users
// router.get("/", (req, res) => {
//     res.json(users);
// });

// // GET one user by id.
// router.get("/:id", (req, res, next) => {
//     const userId = parseInt(req.params.id);
//     const user = users.find((user) => user.id === userId);

//     if (user) {
//         res.json(user);
//     } else {
//         res.json({ error: "User not found" });
//     }
// });

// //CREATE - POST - Create a new user.
// // router.post("/", (req, res) => {
// //     const newUser = req.body;
// //     newUser.id = users.length + 1;
  
// //     users.push(newUser);
// //     res.json({error: "Insufficient Data" })
// // });

//  //CREATE - POST - create a user
//  router.post("/", (req, res, next) => {
//     if (req.body.name && req.body.username && req.body.email) {
//       if (users.find((u) => u.username == req.body.username)) {
//         res.json({ error: "Username Already Taken" });
//         return;
//       }
  
//       const user = {
//         id: users[users.length - 1].id + 1,
//         name: req.body.name,
//         username: req.body.username,
//         email: req.body.email,
//       };
  
//       users.push(user);
//       res.json(users[users.length - 1]);
//     } else res.json({ error: "Insufficient Data" });
//   });
  
//   //SHOW - GET - get one user
//   router.get("/:id", (req, res, next) => {
//     //find the user id
//     const user = users.find((u) => u.id == req.params.id);
  
//     console.log(user);
//     //if the user exists display the json data
//     if (user) res.json(user);
//     else next();
//   });

//   // PUT/PATCH update a user by ID
// router.put('/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const updatedUser = req.body;
  
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].id === userId) {
//         users[i] = { ...users[i], ...updatedUser };
//         res.json(users[i]);
//         return;
//       }
//     }
  
//     res.status(404).json({ error: 'User not found' });
//   });

//   // DELETE a user by ID
// router.delete('/users/:id', (req, res) => {
//     const userId = parseInt(req.params.id);
//     const index = users.findIndex((user) => user.id === userId);
  
//     if (index !== -1) {
//       const deletedUser = users.splice(index, 1);
//       res.json(deletedUser[0]);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   });

  

// module.exports = router;