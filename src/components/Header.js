import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
       <div className="container-fluid px-5 d-none d-lg-block">
        <div className="row gx-5 align-items-center">
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-start">
                    <img src="img/Logo.png" alt="" style={{height:"100px", width:"100px"}}/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="d-flex align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand ms-lg-5">
                        <h2 className="m-0 display-4 text-primary">Marvel Agro & <span className="text-secondary">Dairy Farm</span></h2>
                    </a>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-start">
                    <i className="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
                    <h4 className="mb-0">7984493532</h4>
                </div>
            </div>
            {/* <div className="col-lg-3">
                <div className="d-flex align-items-center justify-content-end">
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle me-2" href="/"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-square rounded-circle" href="/"><i className="fab fa-instagram"></i></a>
                </div>
            </div> */}
        </div>
    </div>


    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-1 py-lg-0 px-3 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex d-lg-none align-items-center">
                {/* <h1 className="m-0 display-4 text-secondary"><span className="text-white">MA</span>DF</h1> */}
                <img src="img/Logo.png" alt="" style={{height:"40px", width:"40px"}}/>
                </a>
                <h3 className="navbar-brand d-flex d-lg-none">
                    <span className="h3 m-auto text-white">MADF</span>
                </h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/About" className="nav-item nav-link">About</Link>
                <Link to="/Services" className="nav-item nav-link">Services</Link>
                <div className="nav-item dropdown">
                    <Link to="/Product" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Product</Link>
                    <div className="dropdown-menu m-0">
                        <Link to="/MilkProduct" className="dropdown-item">Milk Product</Link>
                        <Link to="/CowProduct" className="dropdown-item">Cow Product</Link>
                        <Link to="/FarmProduct" className="dropdown-item">Farm Product</Link>
                        <Link to="/AllProduct" className="dropdown-item">All Product</Link>
                    </div>
                </div>
                <Link to="/Gallery" className="nav-item nav-link">Gallery</Link>
            </div>
        </div>
    </nav>
    </div>
  )
}
