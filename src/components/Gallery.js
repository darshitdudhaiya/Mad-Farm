import React from "react";

export default function Gallery() {
  return (
    <div className="container gallery-container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 gallery-item">
          <img src="img/gallery1.jpg" alt="Image 1" className="w-100 h-100" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery-item">
          <img src="img/gallery3.jpg" alt="Image 3" className="w-100 h-100" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery-item">
          <img src="img/gallery5.jpg" alt="Image 5" className="w-100 h-100" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 gallery-item">
          <img src="img/gallery4.jpg" alt="Image 4" className="w-100 h-100" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 gallery-item">
          <img src="img/gallery2.jpg" alt="Image 2" className="w-100 h-100" />
        </div>
      </div>
      {/* Add more gallery items as needed */}
    </div>
  );
}
