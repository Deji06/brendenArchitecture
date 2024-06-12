import React from 'react'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <>
        <Navbar />
        <section className='xl:ml-20 ml-2'>
          <h1 className='capitalize font-bold text-center xl:text-left text-[1.5rem] mt-5'>contact page</h1>
          <h3 className='text-[1.2rem] text-center xl:text-left'>say something to us</h3>

          <form className="flex flex-col gap-4 mt-5 p-5 ">
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem] text-center lg:text-left xl:text-left md:text-left" htmlFor="">
                Enter Your Fullname
              </label>
              <input
                className="p-5 xl:w-[500px] lg:w-[400px] md:w-[400px] rounded-[5px] border border-black"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem] lg:text-left md:text-left  text-center xl:text-left" htmlFor="">
                Enter Email Address
              </label>
              <input
                className="p-5 xl:w-[500px] lg:w-[400px] md:w-[400px] md:text-left rounded-[5px] border border-black"
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[1.2rem] text-center xl:text-left lg:text-left md:text-left" htmlFor="">
                Enter Your Message
              </label>
              <textarea
                className="p-5 xl:w-[500px] lg:w-[400px] md:w-[400px] rounded-[5px] border border-black"
                name=""
                id=""
              ></textarea>
            </div>
          </form>
          <button
            type="submit"
            className="bg-[#071A2B] text-[1.2rem] rounded-[30px] capitalize xl:px-[200px] xl:py-[20px] px-[80px] py-[10px] xl:mt-10 my-5 mx-5 text-[#fff]"
          >
            send message
          </button>

        </section>
    
    </>
  )
}

export default Contact