// const express = require("express");
// const router = express.Router();

// const items = require("../data/items");

// // INDEX - GET all items
// router.get("/", (req, res) => {
//   res.json(items);
// });

// // SHOW - GET one item by ID
// router.get("/:id", (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const item = items.find((item) => item.id === itemId);

//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ error: "Item not found" });
//   }
// });

// // CREATE - POST create a new item
// router.post("/", (req, res) => {
//   const newItem = req.body;
//   newItem.id = items.length + 1;

//   items.push(newItem);
//   res.status(201).json(newItem);
// });

// // UPDATE - PUT/PATCH update an item by ID
// router.put("/:id", (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const updatedItem = req.body;

//   for (let i = 0; i < items.length; i++) {
//     if (items[i].id === itemId) {
//       items[i] = { ...items[i], ...updatedItem };
//       res.json(items[i]);
//       return;
//     }
//   }

//   res.status(404).json({ error: "Item not found" });
// });

// // DELETE - DELETE an item by ID
// router.delete("/:id", (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const index = items.findIndex((item) => item.id === itemId);

//   if (index !== -1) {
//     const deletedItem = items.splice(index, 1);
//     res.json(deletedItem[0]);
//   } else {
//     res.status(404).json({ error: "Item not found" });
//   }
// });

// module.exports = router;
