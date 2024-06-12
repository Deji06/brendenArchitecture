import React from "react";
import Navbar from "../Navbar";
import Footer from "../Components/Footer";
import ManagementTeam from "../ManagementTeam";
import award1 from "../assets/Images/award1.png"
import award2 from "../assets/Images/award2.png"

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="xl:ml-20 ml-2 py-5 ">
        <h2 className="text-[2rem] mt-5 capitalize text-center xl:text-left">about us page</h2>
        <h5 className="text-[1.2rem] text-[#5D5D5D] text-center xl:text-left ">
          Here are the things you need to know about us
        </h5>
        <div>
          <h2 className="text-[2rem] mt-5 text-center xl:text-left">Heading Block Text</h2>
          <p className="text-[#5D5D5D] py-2 text-center xl:text-left">
            Lorem ipsum dolor sit amet consectetur. Enim nisl quis suscipit
            massa eget scelerisque. Risus ipsum vel dolor eget elementum. Vitae
            leo orci ut <br /> nec fames nisi interdum molestie nunc. Lectus sit
            vestibulum tempus fermentum aenean. Placerat pretium accumsan mus
            consectetur integer <br /> urna. Morbi eget urna tortor porta donec
            tempus. Nibh penatibus non amet urna lorem turpis volutpat fermentum
            amet. Erat tincidunt augue <br /> potenti amet. Faucibus ut viverra
            tristique dapibus dolor viverra ac mauris mi. Mattis nec ac leo
            ultrices. Porta gravida vestibulum egestas proin <br /> sit accumsan
            turpis amet. Urna dolor nullam nisi sem tempor. Velit suspendisse
            vitae pellentesque tortor quis convallis.
          </p>
        </div>
        <div className="">
          <h2 className="text-[2rem] mt-5 text-center xl:text-left ">Management Team</h2>
        </div>
        <div className="flex mt-5 xl:w-[1281px] p-5 gap-y-5 xl:flex-row justify-center flex-wrap  rounded-[5px] md:justify-between">
          {ManagementTeam.map((team) => {
            const { image, name, role } = team;
            return (
              <div className="bg-[#F8F9FB] ">
                <img className="py-10" src={image} alt="management team member picture" />
                <div className=" px-5">
                  <h2 className="font-bold">{name}</h2>
                  <h3 className="text-[#4F5D71]">{role}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="xl:ml-20 lg:ml-20">
          <h2 className="capitalize text-[2rem]  mt-5 text-center xl:ml-0 ">achievement/awards</h2>
          <div className="flex m-auto  flex-col justify-center mt-5 xl:w-[1081px] xl:flex-nowrap gap-y-5 w-[300px]  md:flex-row  md:gap-x-32 ">
            <img src={award1} alt="" />
            <img src={award2} alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
