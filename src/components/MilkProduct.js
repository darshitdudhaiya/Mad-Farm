import React from "react";

export default function MilkProduct() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">Milk Products</h6>
            <h1 className="display-5">Our Fresh Milk Products</h1>
          </div>
          <div className="container-img">
            
            <div className="row">
              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/milk.png" alt="" />
                <h6 className="mb-3">Cow Milk</h6>
                <h5 className="text-primary mb-0">₹60 / 1Ltr.</h5>
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
                <img className="img-fluid mb-4" src="img/ghee.png" alt="" />
                <h6 className="mb-3">Cow Ghee</h6>
                <h5 className="text-primary mb-0">₹600 / 1Kg.</h5>
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
                <img
                  className="img-fluid mb-4"
                  src="img/butter-milk.png"
                  alt=""
                />
                <h6 className="mb-3">Cow Butter Milk</h6>
                <h5 className="text-primary mb-0">₹40 / 1Ltr.</h5>
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
                <img className="img-fluid mb-4" src="img/butter.png" alt="" />
                <h6 className="mb-3">Cow Butter</h6>
                <h5 className="text-primary mb-0">₹400 / 1Kg.</h5>
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
                <img className="img-fluid mb-4" src="img/curd.png" alt="" />
                <h6 className="mb-3">Cow Curd</h6>
                <h5 className="text-primary mb-0">₹150 / 1Kg.</h5>
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
