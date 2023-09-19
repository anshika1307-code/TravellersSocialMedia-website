import React from "react";
import "./style.css";

const Home = () => {
  return (
    <>
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active h-60">
              <img src="./Images/img1.jpg" className="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block fstyle">
                <h1>
                  <span className="lightstyle">Become a</span> <b>GHUMAKKAD</b>
                </h1>
                <p className="lightstyle">
                  Travel and share your Experience with the largest Travellers
                  community
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./Images/img2.jpg" className="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block fstyle">
                <h1>
                  <span className="lightstyle">See what people are</span>{" "}
                  <b>EXPLORING?</b>
                </h1>
                <p className="lightstyle">
                  Know the most visited places of an area
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./Images/img3.jpg" className="d-block w-100" alt="" />
              <div class="carousel-caption d-none d-md-block fstyle">
                <h1>
                  <b>CATEGORY</b>{" "}
                  <span className="lightstyle">based Search</span>
                </h1>
                <p className="lightstyle">
                  Explore a place according to your Interest !! Like
                  photographers can see best place where other photographers are
                  visiting Foodies can search the best places to eat
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section>
        <div>
          <h1 className="sectiontext"><span className="lightstyle">Top</span> <span className="gbold">Ghumakkads</span> <span className="lightstyle">this week</span></h1>
        </div>
      </section>
    </>
  );
};

export default Home;
