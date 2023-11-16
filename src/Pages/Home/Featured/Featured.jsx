import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white bg-fixed pt-12 my-12">
      <SectionTitle
        subHeading={"Check Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-36 gap-6">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20,2029</p>
          <p className="uppercase">where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex
            natus officia dicta sapiente commodi soluta, explicabo neque
            impedit, dolores ipsa quam? Neque, possimus minima distinctio dolor
            asperiores fuga, non ab molestiae accusantium vel sunt. Sunt
            laboriosam voluptatem voluptate cumque iure eum voluptatibus aperiam
            quod esse, necessitatibus est modi delectus.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
