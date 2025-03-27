import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState(null);
  const [users, setUsers] = useState(null);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:5001/products");
    const data = await response.json();
    setProducts(data);
  };

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:5002/orders");
    const data = await response.json();
    setOrders(data);
  };

  const fetchUsers = async () => {
    const response = await fetch("http://localhost:5003/users");
    const data = await response.json();
    setUsers(data);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Microservices Frontend</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h2>Products</h2>
          <button onClick={fetchProducts}>Fetch Products</button>
          <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>

        <div>
          <h2>Orders</h2>
          <button onClick={fetchOrders}>Fetch Orders</button>
          <pre>{JSON.stringify(orders, null, 2)}</pre>
        </div>

        <div>
          <h2>Users</h2>
          <button onClick={fetchUsers}>Fetch Users</button>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
