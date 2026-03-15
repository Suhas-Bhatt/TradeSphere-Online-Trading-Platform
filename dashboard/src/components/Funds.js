import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row funds-layout gx-4 mt-4">
        <div className="col-lg-6 mb-4">
          <div className="section-header d-flex justify-content-between align-items-center mb-3">
            <span className="h5 fw-bold mb-0">Equity</span>
            <div className="action-buttons btn-group">
              <Link className="btn btn-sm btn-success">Add funds</Link>
              <Link className="btn btn-sm btn-primary">Withdraw</Link>
            </div>
          </div>

          <div className="funds-data-table border rounded p-3 bg-white shadow-sm">
            <div className="data-row d-flex justify-content-between py-2 border-bottom">
              <p className="mb-0 text-muted">Available margin</p>
              <p className="amount colored mb-0 fw-bold">4,043.10</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2 border-bottom">
              <p className="mb-0 text-muted">Used margin</p>
              <p className="amount mb-0 fw-bold">3,757.30</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Available cash</p>
              <p className="amount mb-0 fw-bold">4,043.10</p>
            </div>
            <hr className="my-2" />
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Opening Balance</p>
              <p className="amount mb-0">4,043.10</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Payin</p>
              <p className="amount mb-0">4,064.00</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">SPAN</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Delivery margin</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Exposure</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Options premium</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <hr className="my-2" />
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Collateral (Liquid funds)</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <div className="data-row d-flex justify-content-between py-2">
              <p className="mb-0 text-muted">Collateral (Equity)</p>
              <p className="amount mb-0">0.00</p>
            </div>
            <div className="data-row bold d-flex justify-content-between py-3 border-top mt-2 fw-bold">
              <p className="mb-0">Total Collateral</p>
              <p className="amount mb-0">0.00</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 commodity-section">
          <div className="section-header mb-3">
            <span className="h5 fw-bold">Commodity</span>
          </div>
          <div className="commodity-placeholder d-flex flex-column align-items-center justify-content-center border border-dashed rounded bg-light py-5">
            <p className="text-muted mb-4">You don't have a commodity account</p>
            <Link className="btn btn-primary">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;