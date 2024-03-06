import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { RiShareCircleFill } from "react-icons/ri";

export default function PortCard({
  name,
  videoUrl,
  type,
  tech,
  desc,
  github,
  visit,
}) {
  return (
    <div className="sm:w-2/5 w-72  mb-2 shadow-lg rounded-xl relative  ">
      <div className="h-[40%]">
        <img
          src={
            `${window.location.origin}/${videoUrl}` ||
            `${window.location.origin}/images/frontend/codecrush.png`
          }
          className=" rounded-t-lg h-full w-full object-cover "
        />
      </div>
      <div className="p-4 flex flex-col gap-5">
        <div className="pb-16">
          <p className="bg-yellow-400 text-white w-fit px-2 py-1 capitalize text-sm font-[400] mb-2">
            {type} Project
          </p>
          <h2 className="sm:text-xl text-lg font-semibold mb-1 ">
            {name}
          </h2>
          <p className="sm:text-base text-xs  mb-1">
            <span className="font-semibold">Tech-stack:</span> {tech}
          </p>
          <p className="sm:text-base text-xs line-clamp-2 sm:line-clamp-none text-pretty text-gray-500">{desc}</p>
        </div>
        <div className="flex gap-5 mt-3 absolute bottom-4 left-4 ">
          <Link to={github} target="_blank">
            <button className="px-2 py-1 sm:py-2 sm:px-3 sm:text-xl text-base bg-stone-800 tracking-wide flex items-center gap-2 text-white rounded-lg   ">
              <FaGithub/> Link
            </button>
          </Link>

          {visit && (
            <Link to={visit} target="_blank">
              <button className="px-2 py-1 sm:py-2 sm:px-3 sm:text-xl text-base bg-[#65B741] bg-opacity-50 flex tracking-wide items-center gap-2 text-white rounded-lg ">
                <RiShareCircleFill/> Visit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
