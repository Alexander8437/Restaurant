import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="imageBox">
            <img
              src="https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hero"
            />
          </div>
          <div className="combined_boxes">
            <img src="./threelines.svg" alt="threelines" />
            <h1 className="title">Delicious</h1>
            <h1 className="title">Food</h1>
            <h1 className="title dishes_title">Dishes</h1>
          </div>
        </div>
        {/* <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
