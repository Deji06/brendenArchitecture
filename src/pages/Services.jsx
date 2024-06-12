import React from "react";
import Navbar from "../Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import skyscraper from "../assets/Images/skyscrapper.png";
import architectworking from "../assets/Images/architectworking.png";
import interiorimage from "../assets/Images/interiorimage.png";
import projectbuildingimage from "../assets/Images/projectbuildingimage.png";
import domeImage from "../assets/Images/domeImage.png";
import house1 from "../assets/Images/house1.png";
import house2 from "../assets/Images/house2.png"
import churchImage from "../assets/Images/churchImage.png";




const Services = () => {
  return (
    <>
      <Navbar />
      <section className="xl:ml-20 lg:ml-20 ml-2 px-3">
        <h2 className="text-[2rem] mt-5 capitalize font-bold text-center xl:text-left lg:text-left">services page</h2>
        <h5 className="text-[1.2rem] text-[#5D5D5D] text-center xl:text-left lg:text-left ">
          We just don’t offer these services, we deliver greatly!
        </h5>

        <div className="flex xl:flex-row lg:flex-row py-5 flex-col mt-0 gap-x-64">
          <div className="xl:w-[700px] ml-0 ">
            <h2 className="text-[2rem] mt-10  capitalize font-bold  text-center xl:text-left lg:text-left">
              architectural design
            </h2>
            <h3 className="py-5 text-center xl:text-left lg:text-left">
              Architectural buildings are timeless symbols of human ingenuity
              and <br /> culture, shaping our landscapes and experiences. From
              towering <br /> skyscrapers to humble homes, each structure tells
              a unique story of <br /> creativity and purpose. They serve as
              symbols of progress and identity <br />, reflecting our values and
              aspirations. In their design and construction, <br />{" "}
              architectural buildings embody the essence of human innovation and{" "}
              <br /> leave a lasting impression on the world.
            </h3>
            <button className="bg-black text-white py-5 px-10 mt-5 rounded-[5px]  m-auto block">
              <Link to={"/contact-us"}>Contact us</Link>
            </button>
          </div>
          <img className="mx-auto mt-5 xl:ml-0 w-[300px] lg:w-[300px] lg:mr-10 xl:w-fit" src={skyscraper} alt="sky scrapper" />
        </div>

        <div className="flex py-5  mt-5 xl:flex-row lg:flex-row flex-col  gap-x-64">
          <img className="mt-5 mx-auto xl:mx-0 w-[300px] xl:w-fit" src={architectworking} alt="two architect working" />
          <div className="xl:w-[700px] ml-0 ">
            <h2 className="text-[2rem] mt-10 capitalize font-bold text-center xl:text-center lg:text-left ">
              building construction
            </h2>
            <h3 className="py-5 text-center xl:text-center lg:text-center">
              Architectural buildings are timeless symbols of human ingenuity
              and <br /> culture, shaping our landscapes and experiences. From
              towering <br /> skyscrapers to humble homes, each structure tells
              a unique story of <br /> creativity and purpose. They serve as
              symbols of progress and identity <br />, reflecting our values and
              aspirations. In their design and construction, <br />{" "}
              architectural buildings embody the essence of human innovation and{" "}
              <br /> leave a lasting impression on the world.
            </h3>
            <button className="bg-black text-white py-5 px-10 mt-5 rounded-[5px] xl:m-auto m-auto block">
              <Link to={"/contact-us"}>Contact us</Link>
            </button>
          </div>
        </div>

        <div className="flex xl:flex-row lg:flex-row flex-col xl:mt-20 mt-5 py-5  xl:gap-x-64">
          <div className="xl:w-[700px] ml-0">
            <h2 className="text-[2rem] xl:mt-10 capitalize font-bold text-center xl:text-left lg:text-left ">
              project management
            </h2>
            <h3 className="xl:py-5 text-center lg:w-[400px] xl:text-left lg:text-left">
              Building construction: a precise process turning designs into
              reality. It <br /> demands planning, skilled labor, and careful
              execution. From laying <br /> foundations to erecting structures,
              each step shapes functional spaces. It <br /> reflects
              craftsmanship, innovation, and dedication to excellence."
            </h3>
            <button className="bg-black text-white py-5 px-10 mt-5 rounded-[5px] xl:ml-0 m-auto block">
              <Link to={"/contact-us"}>Contact us</Link>
            </button>
          </div>
            <img className="mt-5 mx-auto xl:mx-0 w-[300px] xl:w-fit lg:mr-10 " src={projectbuildingimage} alt="" />
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:mt-20 mt-10  xl:gap-x-64 ">
          <img className="mt-5 mx-auto xl:mx-0 w-[300px] lg:ml-0 xl:w-fit" src={interiorimage} alt="two architect working" />
          <div className="xl:w-[700px] ml-0">
            <h2 className="text-[2rem] mt-10 capitalize font-bold text-center xl:text-center lg:text-center ">
              interior design
            </h2>
            <h3 className=" xl:w-[500px] md:w-[400px] md:text-center md:m-auto lg:w-[400px] text-center xl:text-left lg:text-left">
              Transform your space into a sanctuary with sleek minimalist
              furnishings and soft, inviting textures, creating a haven of
              modern tranquility. Elevate your home's ambiance with a fusion of
              vintage charm and contemporary elegance, blending curated antiques
              with clean lines and luxe accents.
            </h3>
            <button className="bg-black text-white py-5 px-10 mt-5 rounded-[5px] m-auto block">
              <Link to={"/contact-us"}>Contact us</Link>
            </button>
          </div>
        </div>
      </section>

      <section className=" xl:ml-20 xl:mt-20 mt-10 ml-2 py-5">
        <h2 className="capitalize text-[2rem] text-center xl:text-left font-bold">architectural design projects</h2>
        <div className="flex xl:flex-row xl:justify-between lg:flex-row md:flex-row flex-col  gap-y-10 mt-5">
          <img className="w-[300px] mx-auto xl:mx-0  xl:w-fit" src={domeImage} alt="building" />
          <img  className="w-[300px] mx-auto xl:mx-0 xl:mr-10 xl:w-fit" src={churchImage} alt="building" />
        </div>

        <div className="mt-10">
          <h2 className="capitalize text-[2rem] text-center xl:text-left  font-bold">building projects</h2>
          <div className="flex xl:flex-row xl:justify-between  lg:flex-row md:flex-row flex-col gap-y-10   mt-5">
            <img className="w-[300px] mx-auto xl:mx-0 xl:w-fit" src={house1} alt="building" />
            <img className="w-[300px] xl:w-fit mx-auto xl:mx-0 xl:mr-10" src={house2} alt="building" />
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Services;
