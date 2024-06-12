import React from "react";
import Testimonials from "../Testimonials";


const Testimonial = () => {
  return (
    <>
      <div className="py-5 xl:ml-10 mt-10">
        <h2 className="xl:text-[3rem] text-[2rem] md:ml-10 text-center xl:text-left">Testimonials</h2>
        <div className="flex xl:flex-row lg:flex-row xl:justify-start items-center lg:justify-center md:flex-row md:px-5 md:h-fit flex-col gap-10 md:w-[full] md:ml-10 ">
          {Testimonials.map((testimonial, key) => {
            const { avatar, name, position, texts } = testimonial;
            return (
              // container
              <div className=" p-5 mt-5 xl:w-[400px] w-[300px] md:w-[400px] bg-[#F8F9FB] md:self-stretch xl:self-stretch ">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4">
                    <img key={avatar} src={avatar} alt="ceo image" />
                    <div>
                      <p className="font-bold" key={avatar}>{name}</p>
                      <p key={name}>{position}</p>
                    </div>
                  </div>
                  <p className="text-[#8392A7]" key={avatar}>{texts}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
