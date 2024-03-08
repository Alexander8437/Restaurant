import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Prepare your taste buds for a gastronomic journey unlike any
              other. Our menu boasts a symphony of flavors, expertly crafted by
              our talented chefs who draw inspiration from both local traditions
              and global influences. From succulent seafood to tender cuts of
              meat, every dish is a masterpiece waiting to be savored.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img
              src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="about"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
