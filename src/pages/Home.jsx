import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import {
  architecturalbuilding1,
  architecturalbuilding2,
  buidlingproject1,
  buildingproject2,
  homeBuilding,
  staircase,
} from "../assets/Image";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="xl:py-5">
        <Navbar />
        <section className="xl:ml-20 ml-2 mt-10 md:ml-10">
          <h1 className="text-[#071A2B] xl:text-[4rem] md:text-[4rem] text-center xl:text-left lg:text-left  text-[2rem] capitalize  font-bricolage">
            great architecture, <br /> great building
          </h1>
          <h4 className="mt-3 text-[#8392A7] text-center xl:text-left lg:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            earum quis <br /> in amet a? El igendi maiores ducimus, consectetur
            odit reiciendis laudantium, <br /> rerum odio, accusamus expedita
            hic officia! Quo, earum amet?
          </h4>
          <button className="bg-[#071A2B] rounded-[10px] p-2 text-[#fff] block mt-5 mx-auto xl:ml-0 ">
            {<Link to="/contact-us">contact us</Link>}
          </button>
          <img src={homeBuilding} className="md:w-[600px] mx-auto mt-5 xl:ml-0 lg:ml-0  w-[300px] xl:w-fit" alt="" />
        </section>

        <section className="mt-5 flex flex-col xl:flex-row justify-between xl:ml-20 ml-2 md:flex-row md:gap-x-7 md:ml-10 p-5" >
          <div className="xl:mt-20 mt-5 flex flex-col gap-5  ">
            <div className="flex flex-col gap-2">
              <h2 className="text-[1.5rem] text-center xl:text-left font-bold lg:text-left">company overview</h2>
              <span className="text-[#8392A7] text-center xl:text-left lg:text-left">
                Lorem ipsum dolor sit amet consectetur. Consectetur nibh <br />{" "}
                convallis sed odio viverra. Odio id aliquam condimentum <br />{" "}
                bibendum. Diam mauris auctor tincidunt sem lectus habitant .{" "}
                <br /> Odio id aliquam
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[1.5rem] text-center xl:text-left lg:text-left">Our Philosophy</h2>
              <span className="text-[#8392A7] text-center xl:text-left lg:text-left">
                Lorem ipsum dolor sit amet consectetur. Consectetur nibh <br />{" "}
                convallis sed odio viverra. Odio id aliquam condimentum <br />{" "}
                bibendum. Diam mauris auctor tincidunt sem lectus habitant.{" "}
                <br /> Odio id aliquam{" "}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[1.5rem] text-center xl:text-left lg:text-left">Our Mission Statement</h2>
              <span className="text-[#8392A7] text-center xl:text-left lg:text-left">
                Lorem ipsum dolor sit amet consectetur. Consectetur nibh <br />{" "}
                convallis sed odio viverra. Odio id aliquam condimentum <br />{" "}
                bibendum. Diam mauris auctor tincidunt sem lectus habitant.{" "}
                <br /> Odaliquamio id{" "}
              </span>
            </div>
          </div>

          <img
            src={staircase}
            className="xl:mt-20 xl:mr-20  xl:h-[560px] h-[350px] md:h-[500px] md:mt-7 mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit "
            alt=""
          />
        </section>

        <section className="xl:ml-20 ml-2 mt-10 md:ml-10">
          <h2 className="capitalize xl:text-[3rem] text-[1.5rem] font-medium text-center xl:text-left lg:text-left">
            architectural design projects
          </h2>
          <div className="flex xl:flex-row flex-col gap-y-8 justify-between mt-5 md:flex-row ">
            <img
              src={architecturalbuilding1}
              className="xl:mt-20 xl:mr-20  xl:h-[560px] h-[350px] md:h-[500px] md:mt-7 mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit"
              alt=""
            />
            <img
              src={architecturalbuilding2}
              className="xl:mt-20 xl:mr-20  xl:h-[560px] h-[350px] md:h-[500px] md:mt-7 mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit"
              alt=""
            />
          </div>
        </section>

        <section className="xl:ml-20 ml-2 mt-10 md:ml-10">
          <h2 className="capitalize xl:text-[3rem] text-[1.5rem] font-medium text-center xl:text-left lg:text-left">
            building projects
          </h2>
          <div className="flex xl:flex-row flex-col gap-y-5 justify-between mt-3 md:flex-row ">
            <img
              src={buidlingproject1}
              className="xl:mt-20 xl:mr-20  xl:h-[560px] h-[350px] md:h-[500px] md:mt-7 mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit"
              alt=""
            />
            <img
              src={buildingproject2}
              className="xl:mt-20 xl:mr-20  xl:h-[560px] h-[350px] md:h-[500px] md:mt-7 mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit"
              alt=""
            />
          </div>
        </section>

        <Testimonial />
        <Footer />
      
      </div>
    </>
  );
};

export default Home;
   // <div className="border border-blue-700 bg-red-600  ">
              //   <div className=" border border-red-600 w-[200px] flex gap-3">
              //     <img src={testimonial.avatar} alt="" />
              //     <div>
              //       <p>{testimonial.name}</p>
              //       <p>{testimonial.position}</p>
              //     </div>
              //   </div>
              //   <h3>{testimonial.texts}</h3>
              // </div>