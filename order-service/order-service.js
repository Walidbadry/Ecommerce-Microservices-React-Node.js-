const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const orders = [
  { id: 1, product: "Laptop", quantity: 2 },
  { id: 2, product: "Phone", quantity: 5 },
];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(5002, () => {
  console.log("Order service running on port 5002");
});
