// const express = require("express");
// const router = express.Router();

// const posts = require("../data/posts");

// // GET all posts
// router.get("/", (req, res) => {
//   res.json(posts);
// });

// // GET one post by ID
// router.get("/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === postId);

//   if (post) {
//     res.json(post);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// });

// // POST create a new post
// router.post("/", (req, res) => {
//   const newPost = req.body;
//   newPost.id = posts.length + 1;

//   posts.push(newPost);
//   res.status(201).json(newPost);
// });

// // PUT/PATCH update a post by ID
// router.put("/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const updatedPost = req.body;

//   for (let i = 0; i < posts.length; i++) {
//     if (posts[i].id === postId) {
//       posts[i] = { ...posts[i], ...updatedPost };
//       res.json(posts[i]);
//       return;
//     }
//   }

//   res.status(404).json({ error: "Post not found" });
// });

// // DELETE a post by ID
// router.delete("/:id", (req, res) => {
//   const postId = parseInt(req.params.id);
//   const index = posts.findIndex((post) => post.id === postId);

//   if (index !== -1) {
//     const deletedPost = posts.splice(index, 1);
//     res.json(deletedPost[0]);
//   } else {
//     res.status(404).json({ error: "Post not found" });
//   }
// });

// module.exports = router;