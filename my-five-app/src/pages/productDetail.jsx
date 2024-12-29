import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  const [productDetail1, setProductDetail1] = useState({});

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log("response", response);
        setProductDetail1(response?.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <div className="first">
        <div className="first1">
          <img src={productDetail1?.thumbnail} alt="" />
        </div>
        <div id="Hammad">
        <div className="first2">
            <h2>{productDetail1?.description}</h2>
          <div className="ten">
            <div className="ten1">
              {productDetail1?.reviews?.map((ele, i) => {
                return (
                  <div className="second" key={i} style={{ width: 350 }}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={ele.rating}
                        precision={0.5}
                        readOnly
                        className="kha"
                      />
                    </div>
                );
              })}
            </div>
            <div className="ten2">
              <b>{` ${productDetail1?.rating} Ratings | 3 Answered Questions`}</b>
            </div>
          </div>
          <p>Brands :<span>{` ${productDetail1?.brand}`}</span></p>
          <h1>{`RS : ${productDetail1?.price}`}</h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
