import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

const Products = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getDataProducts = async () => {
    const response = await fetch(url);
    const dataProdcut = await response.json();
    setProducts(dataProdcut);
  };

  useEffect(() => {
    getDataProducts();
  });
   
  return (
    <div className="container">
      <div classsName="row">
        <h1>My Product</h1>
        {products.map((produk) => {
          return (
            <div className="col-3">
              <CardProdcut
                key={produk.id}
                title={produk.title}
                price={produk.price}
                description={produk.description}
                image={produk.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

function CardProdcut(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          <p>Price : {props.price} $</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Products;
