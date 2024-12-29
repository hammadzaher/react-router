import React, { useEffect, useState } from "react";
import "./style1.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        console.log("response", response);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <div className="">
        <div className="home1">
          {products.map((ele, index) => (
               <Link to={`/detail/${ele?.id}`} key={index} style={{}} className='text-decoration-none'>
              <Card key={index} style={{ width: "18rem" }} className="card">
                <div className="flex">
                  <img
                    alt=""
                    width={300}
                    height={200}
                    variant="top"
                    src={ele?.images[0]}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="title">
                    {ele?.id}: {ele?.title}
                  </Card.Title>
                  <Card.Text>{ele?.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
