import { useState } from "react";
import "./form.css";

const MyForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [dc, setDc] = useState("");
  const [products, setProducts] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);

  const handleNewProduct = (e) => {
    e.preventDefault(); // Correct use

    const newProduct = { name, price, dc };
    console.log(newProduct);

    setProducts([...products, newProduct]);

    // Reset form
    setName("");
    setPrice(0);
    setDc("");
  };

  const showForm = () => {
    setIsShowForm(!isShowForm);
  };

  return (
    <div>
      <button className="button" onClick={showForm}>
        {isShowForm ? "Hide Form" : "Show Form"}
      </button>

      {isShowForm && (
        <form
          onSubmit={handleNewProduct}
          style={{
            background: "#797676ff",
            color: "#FFF",
            padding: "10px",
            margin: "10px",
            width: "500px",
            height: "auto",
            borderRadius: "5px",
          }}
        >
          <div className="div-main">
            <div className="div-style">
              <label style={{ padding: "4px 10px" }}>Name:</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <br />
            <div className="div-style">
              <label style={{ padding: "4px 10px" }}>Price:</label>
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>
            <br />
            <div className="div-style">
              <label style={{ padding: "4px 10px" }}>Delivery Charges:</label>
              <input
                type="number"
                onChange={(e) => setDc(e.target.value)}
                value={dc}
              />
            </div>
            <br />
            <button type="submit" className="prod-Btn">
              Add Product
            </button>
          </div>
        </form>
      )}

      {products.length > 0 && (
        <div style={{ marginTop: "20px", padding: "10px" }}>
          <h2>Product List</h2>
          <ul>
            {products.map((prod, index) => (
              <li key={index}>
                <strong>{prod.name}</strong> — ${prod.price} — Delivery: $
                {prod.dc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyForm;
