import React from 'react'
import Navbar from '../Navbar'
import theSpace from '../assets/Images/theSpace.png'
import theSpace2 from '../assets/Images/theSpace2.png'
import theSpace3 from '../assets/Images/theSpace3.png'
import theAvenue from '../assets/Images/theAvenue.png'
import theAvenue2 from '../assets/Images/theAvenue2.png'
import theAvenue3 from '../assets/Images/theAvenue3.png'
import theAlley from '../assets/Images/theAlley.png'
import theAlley2 from '../assets/Images/theAlley2.png'
import theAlley3 from '../assets/Images/theAlley3.png'
import Footer from '../Components/Footer'

const Projects = () => {
  return (
    <>
        <Navbar />
        <section className='xl:ml-20 lg:ml-20 ml-2  py-2'>
          <h2 className="text-[1.5rem] text-center xl:text-left capitalize mt-5 lg:text-left font-bold">project page</h2>
          <h5 className="text-[1.2rem] text-center xl:text-left lg:text-left text-[#5D5D5D] ">
           See all our projects here
          </h5>

          <div>
            <h2 className='xl:text-[2rem] text-[1.5rem] text-center xl:text-left lg:text-left capitalize font-bold mt-10 '>completed architectural projects</h2>
            <div className='flex xl:flex-row md:flex-row md:flex-wrap flex-col align-center xl:gap-32 xl:mt-5 px-5 '>
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theAvenue} alt="completed building 2" />
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit'  src={theAlley} alt="completed building 3" />
              <img  className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit'src={theSpace} alt="completed building 1" />
            </div>
          </div>

          <div>
            <h2 className='xl:text-[2rem] text-[1.5rem] text-center xl:text-left lg:text-left font-bold mt-10 capitalize'>completed construction projects</h2>
            <div className='flex xl:flex-row flex-col md:flex-row md:flex-wrap  align-center xl:gap-32 xl:mt-5 px-5'>
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theAvenue2} alt="completed building 2" />
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theAlley2} alt="completed building 3" />
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theSpace2} alt="completed building 1" />
            </div> 
          </div>

          <div>
            <h2 className='xl:text-[2rem] text-[1.5rem] text-center xl:text-left lg:text-left font-bold mt-10 capitalize '>ongoing architectural projects</h2>
            <div className='flex xl:flex-row flex-col md:flex-row md:flex-wrap align-center xl:gap-32 xl:mt-5 px-5'>
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theAvenue3} alt="completed building 2" />
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theAlley3} alt="completed building 3" />
              <img className='mx-auto mt-5 xl:ml-0  w-[300px] xl:w-fit' src={theSpace3} alt="completed building 1" />
            </div>
          </div>
        </section>
        <Footer />
    
    </>
  )
}

export default Projects 