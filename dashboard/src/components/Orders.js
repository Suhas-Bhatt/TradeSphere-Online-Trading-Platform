import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders-container container-fluid mt-4">
      {allOrders.length > 0 ? (
        <>
          <h3 className="title mb-4 h4 fw-light">Orders ({allOrders.length})</h3>

          <div className="order-table table-responsive shadow-sm rounded">
            <table className="table table-hover align-middle mb-0 bg-white">
              <thead className="table-light text-muted small">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="py-3">Qty.</th>
                  <th className="py-3">Price</th>
                  <th className="py-3 text-center">Mode</th>
                </tr>
              </thead>
              <tbody className="text-dark">
                {allOrders.map((stock, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-3 fw-bold">{stock.name}</td>
                      <td className="py-3">{stock.qty}</td>
                      <td className="py-3">₹{stock.price.toFixed(2)}</td>
                      <td className="py-3 text-center">
                        <span className={`badge rounded-pill ${stock.mode === "BUY" ? "bg-primary-subtle text-primary border border-primary-bottom" : "bg-danger-subtle text-danger border border-danger-bottom"} px-3`}>
                          {stock.mode}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="no-orders text-center py-5">
          <p className="text-muted mb-4">You haven't placed any orders today</p>
          <Link to={"/"} className="btn btn-primary px-4">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;