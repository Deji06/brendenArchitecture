import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#DCE3ED] py-10 xl:mt-10   ">
        <div className="xl:ml-20 md:ml-10">
          <h2 className="text-[2rem] capitalize ml-5 mt-5">contact form</h2>
          <form className="flex flex-col gap-4 ml-6 mt-5">
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem]" htmlFor="">
                Enter Your Fullname
              </label>
              <input
                className="p-5 xl:w-[500px] w-[270px] rounded-[5px]"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem]" htmlFor="">
                Enter Email Address
              </label>
              <input
                className="p-5 xl:w-[500px] w-[270px] rounded-[5px]"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem]" htmlFor="">
                Enter Your Message
              </label>
              <textarea
                className="p-5 xl:w-[500px] w-[270px] rounded-[5px]"
                name=""
                id=""
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="bg-[#071A2B] text-[1.2rem] xl:rounded-[30px] capitalize xl:px-[200px] xl:py-[20px] px-[80px] rounded-[15px] py-[10px] mt-5 xl:ml-3 ml-7 text-[#fff]"
          >
            send message
          </button>
          <div className="flex xl:flex-row flex-col xl:gap-28 xl:ml-[700px] xl:mt-[-100px] xl:items-center md:flex-row md:gap-10 md:ml-[300px] md:mt-[-150px]">
            <div className="flex flex-col gap-3 mt-5 ml-5">
              <p>Email Address: hello@fmail.com</p>
              <p>Phone Number: +234 1234567890</p>
              <p>Phone Number: +234 0987654322</p>
            </div>
            <div className="flex flex-col gap-1 mt-5 ml-5">
              <Link to="/about-us" className="underline">
                About Us
              </Link>
              <Link to="/service" className="underline">
                Services
              </Link>
              <Link to="/projects" className="underline">
                Our Projects
              </Link>
              <Link to="/contact-us" className="underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
