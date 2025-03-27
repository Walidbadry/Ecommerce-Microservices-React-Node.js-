const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(5001, () => {
  console.log("Product service running on port 5001");
});
