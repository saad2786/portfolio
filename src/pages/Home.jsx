import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex   max-sm:flex-col  ">
        <div className=" flex-1 flex items-start justify-center  max-sm:h-[80vh]   ">
          <div className="w-[65%] max-sm:w-[70%] max-sm:-ml-10 mt-56 max-sm:mt-24 ">
            <h1 className=" font-jos font-bold text-3xl">HI THERE!</h1>
            <h1 className=" font-jos font-bold text-5xl ">
              I&apos;M{' '}
              <span className="text-yellow-400 font-mon tracking-wider text-5xl font-normal text-flicker-in-glow">
                SAAD
              </span>
            </h1>
            <h3 className="py-[1px] px-[3px] my-1 font-medium bounce-in-top  bg-yellow-400 w-fit">
              MERN STACK DEVELOPER/ PROGRAMMER
            </h3>
            <p className="my-5 text-sm tracking-widest text-gray-600 font-rob slide-in-left ">
              As a passionate MERN Stack Developer, I&apos;ve undertaken diverse
              projects showcasing my skills in MongoDB, Express.js, React, and
              Node.js. From interactive web applications to efficient back-end
              solutions, my varied portfolio demonstrates a strong foundation
              and a commitment to delivering high-quality results.
            </p>
            <Link
              to="https://drive.google.com/file/d/1BS7gR0S4PvfuY4iMnP_CYuvAsC7LKlOr/view?usp=drive_link"
              target="_blank"
            >
              <button className="px-4 py-2 cursor-pointer font-medium rounded-3xl text-sm bg-yellow-400 text-white hover:bg-yellow-300 transition-all ease-linear duration-500 shadow-lg shadow-pop-tr">
                RESUME <SimCardDownloadIcon fontSize="medium" />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="flex-1 flex items-end justify-end h-full max-sm:m-12  
         "
        >
          <img
            src="images/colored.jpg"
            className="shadow-2xl w-full h-full object-cover grayscale slide-in-left max-sm:w-44 max-sm:h-44  max-sm:rounded-full max-sm:overflow-hidden max-sm:border-4 max-sm:border-black"
            alt=""
          />
        </div>
      </div>
      <Navbar />
    </>
  )
}
