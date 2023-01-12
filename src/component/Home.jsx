import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [myApi, setMyApi] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(data => data.json())
      .then(json_result => {
        let myApi = json_result.products.map((item, idx) => {
          return (
            <div
            className="card m-3"
            style={{ maxWidth: "540px" }}
            key={idx}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <NavLink to={`/${item.id}`}>
                <img
                  src={item.thumbnail}
                  className="img-fluid rounded-start mt-5"
                  alt={item.title}
                />
                </NavLink>

              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-title">{item.brand}</p>
                  <p className="card-title">{item.category}</p>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    Rs. {item.price}.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          );
        });
        setMyApi(myApi);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage; // 1 * 10 = 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 10 - 10 = 0
  const currentPosts = myApi.slice(indexOfFirstPost, indexOfLastPost); // 0 to 10

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container my-5 py-5 ">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
        <div className="row justify-content-center">

          {currentPosts}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={myApi.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}
