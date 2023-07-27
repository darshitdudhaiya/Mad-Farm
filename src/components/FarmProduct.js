import React from "react";

export default function FarmProduct() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">Farm Products</h6>
            <h1 className="display-5">Our Fresh & Organic Farm Products</h1>
          </div>
          <div className="container-img">
            
            <div className="row">
              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/vermicompost-organic-fertilizer-1.png" alt="" />
                <h6 className="mb-3">vermicompost-organic-fertilizer</h6>
                <h5 className="text-primary mb-0">₹600</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/vermicompost-organic-fertilizer-2.jpg" alt="" />
                <h6 className="mb-3">vermicompost-organic-fertilizer</h6>
                <h5 className="text-primary mb-0">₹600</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/vermicompost-organic-fertilizer-3.png" alt="" />
                <h6 className="mb-3">vermicompost-organic-fertilizer</h6>
                <h5 className="text-primary mb-0">₹600</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
