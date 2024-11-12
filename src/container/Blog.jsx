import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
        {/* Start Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>Blog</h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                  </p>
                  <p>
                    <Link to="" className="btn btn-secondary me-2">
                      Shop Now
                    </Link>
                    <Link to="#" className="btn btn-white-outline">
                      Explore
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  <img src="images/couch.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Hero Section */}
        {/* Start Blog Section */}
        <div className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">First Time Home Owner Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 19, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">How To Keep Your Furniture Clean</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Robert Fox</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 15, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">Small Space Furniture Apartment Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 12, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">First Time Home Owner Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 19, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">How To Keep Your Furniture Clean</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Robert Fox</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 15, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">Small Space Furniture Apartment Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 12, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-1.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">First Time Home Owner Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 19, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">How To Keep Your Furniture Clean</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Robert Fox</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 15, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link to="#" className="post-thumbnail">
                    <img
                      src="images/post-3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link to="#">Small Space Furniture Apartment Ideas</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link to="#">Kristin Watson</Link>
                      </span>{" "}
                      <span>
                        on <Link to="#">Dec 12, 2021</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Section */}
        {/* Start Testimonial Slider */}
        <Slider/>
        {/* End Testimonial Slider */}
    </>
  );
}

export default Blog;
