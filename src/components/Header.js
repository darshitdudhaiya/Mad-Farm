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


    <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex d-lg-none">
            <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                {/* <Link to="/Banner" className="nav-item nav-link">Banner</Link> */}
                <Link to="/About" className="nav-item nav-link">About</Link>
                {/* <Link to="/Facts" className="nav-item nav-link">Facts</Link> */}
                <Link to="/Services" className="nav-item nav-link">Services</Link>
                {/* <Link to="/Features" className="nav-item nav-link">Features</Link> */}
                <Link to="/Products" className="nav-item nav-link">Products</Link>
                <Link to="/Testimonial" className="nav-item nav-link">Testimonial</Link>
                {/* <Link to="/Team" className="nav-item nav-link">Team</Link> */}
                {/* <Link to="/Blog" className="nav-item nav-link">Blog</Link> */}
            </div>
        </div>
    </nav>
    </div>
  )
}
