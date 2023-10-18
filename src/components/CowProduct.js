import React from "react";

export default function CowProduct() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "500px" }}
          >
            <h6 className="text-primary text-uppercase">Cow Products</h6>
            <h1 className="display-5">Our Organic Cow Products</h1>
          </div>
          <div className="container-img">
            <div className="row">
              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src="img/cow-dung-dhoop-sticks.png"
                  alt=""
                />
                <h6 className="mb-3">Cow Dung Dhoop Stick</h6>

                {/* <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div> */}
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img className="img-fluid mb-4" src="img/cow-dung.png" alt="" />
                <h6 className="mb-3">Cow Dung</h6>

                {/* <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div> */}
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src="img/cow-dung-product-1.png"
                  alt=""
                />
                <h6 className="mb-3">Cow Dung Product</h6>

                {/* <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div> */}
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src="img/cow-dung-product-2.png"
                  alt=""
                />
                <h6 className="mb-3">Cow Dung Product</h6>

                {/* <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div> */}
              </div>

              <div className="col-lg-3 product-item position-relative bg-white d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src="img/cow-dung-product-3.png"
                  alt=""
                />
                <h6 className="mb-3">Cow Dung Product</h6>

                {/* <div className="btn-action d-flex justify-content-center">
                  <a className="btn bg-primary py-2 px-3" href="/">
                    <i className="bi bi-cart text-white" />
                  </a>
                  <a className="btn bg-secondary py-2 px-3" href="/">
                    <i className="bi bi-eye text-white" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
