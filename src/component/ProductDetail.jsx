import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? (
            <>
              <div className="justify-text-center"> Loading.... </div>
            </>
          ) : (
            <>
              <div class="container mt-5 mb-5">
                <div class="row d-flex justify-content-center">
                  <div class="col-md-10">
                    <div class="card">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="images p-3">
                            <div class="text-center p-4">
                              {" "}
                              <img
                                id="main-image"
                                src={product.thumbnail}
                                width="250"
                              />{" "}
                            </div>
                            <div class="thumbnail text-center">
                              {" "}
                              <img
                                src={product.thumbnail}
                                width="70"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="product p-4">
                            <div class="mt-4 mb-3">
                              {" "}
                              <span class="text-uppercase text-muted brand">
                                {product.title}
                              </span>
                              <h5 class="text-uppercase">
                                {product.brand}
                              </h5>
                              <div class="price d-flex flex-row align-items-center">
                                {" "}
                                <span class="act-price">{product.category}</span>
                              </div>
                            </div>
                            <p class="about">
                             {product.description}
                            </p>
                            <div class="price d-flex flex-row align-items-center">
                                {" "}
                                Rs. <span class="act-price">{product.price}</span>.00
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
