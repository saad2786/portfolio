import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Stars from "../Stars";


export default function Home() {
  return (
    <>
    <Stars/>
      <div className='w-full h-full flex flex-col sm:flex-row    '>

        <div className=' flex-1 order-2 sm:order-1 flex items-start h-full  overflow-y-scroll   gap-4 justify-center sm:py-10 pb-44 '>
          <div className='sm:w-[65%] w-[90vw]  sm:mt-56 mt-10 text-center sm:text-left '>
            <h1 className=' font-jos font-bold sm:text-3xl text-2xl'>HI THERE!</h1>
            <h1 className=' font-jos font-bold sm:text-5xl text-4xl '>
              I&apos;M{" "}
              <span className='text-yellow-400 font-mon tracking-wider sm:text-5xl text-4xl font-normal text-flicker-in-glow'>
                SAAD
              </span>
            </h1>
            <h3 className='py-[1px] px-[3px] my-1 font-medium bounce-in-top mx-auto sm:mx-0  bg-yellow-400 w-fit'>
              MERN STACK DEVELOPER/ PROGRAMMER
            </h3>
            <p className='my-5 sm:text-sm text-xs tracking-widest text-gray-800 bg-stone-600 backdrop-blur-sm px-2 rounded-lg py-2 bg-opacity-20   font-rob slide-in-left '>
              As a passionate MERN Stack Developer, I&apos;ve undertaken diverse
              projects showcasing my skills in MongoDB, Express.js, React, and
              Node.js. From interactive web applications to efficient back-end
              solutions, my varied portfolio demonstrates a strong foundation
              and a commitment to delivering high-quality results.
            </p>
            <Link
              to='https://drive.google.com/file/d/1BS7gR0S4PvfuY4iMnP_CYuvAsC7LKlOr/view?usp=drive_link'
              target='_blank'
              className="sm:float-left "
            >
              <button className='px-4 py-2 cursor-pointer font-medium text-sm hover:rounded-3xl bg-yellow-400 text-white hover:bg-yellow-300 transition-all ease-linear duration-500 shadow-lg shadow-pop-tr'>
                RESUME <SimCardDownloadIcon fontSize='medium' />
              </button>
            </Link>
            <div className="sm:mt-0 mt-10 mx-auto w-fit flex items-center gap-8">
            <Link to="https://www.linkedin.com/in/saadpatil/" target="_blank">

            <button className='px-2 py-2 cursor-pointer rounded-full   text-white bg-blue-600 transition-all ease-linear duration-500 shadow-lg shadow-pop-tr'>
              <BiLogoLinkedin size={25}/>
              </button>
            </Link>
            <Link to="https://github.com/saad2786" target="_blank">

            <button className='px-2 py-2 cursor-pointer rounded-full   text-white bg-black transition-all ease-linear duration-500 shadow-lg shadow-pop-tr'>
              <FaGithub size={25}/>
              </button>
            </Link>
            <Link to="https://twitter.com/saadpatil23" target="_blank">

            <button className='px-2 py-2 cursor-pointer rounded-full   text-white bg-stone-900 transition-all ease-linear duration-500 shadow-lg shadow-pop-tr'>
              <FaXTwitter size={25}/>
              </button>
            </Link>
            </div>
          </div>
        </div>
        <div
          className='flex sm:flex-1 mb-4 sm:mb-0  items-end justify-end  pt-16 sm:pt-0
        order-1'
        >
          <img
            src='images/colored.jpg'
            className='shadow-2xl sm:w-full sm:h-full object-cover grayscale slide-in-left w-48 h-48 mx-auto max-sm:rounded-full overflow-hidden border-4 sm:border-none border-black'
            alt=''
          />
        </div>
      </div>
      <Navbar />
    </>
  );
}
