import { Link } from 'react-router-dom'

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
    <div className="h-[98%] w-[31%] max-sm:w-fit max-sm:h-[80%]  mb-2 shadow-lg rounded-xl relative  ">
      <div>
        <video
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
          src={videoUrl || `${window.location.origin}/video/v1.mp4`}
          className=" rounded-t-lg "
          loop
          controls
          controlsList="fullscreen noplay nodownload noremoteplayback play timeline volume noplaybackrate  novolume"
        />
      </div>
      <div className="p-4">
        <p className="bg-yellow-400 text-white w-fit px-2 py-1 capitalize text-sm font-[400] mb-2">
          {type} Project
        </p>
        <h2 className="text-xl font-semibold mb-1">
          {name || 'Movie Rating App'}
        </h2>
        <p className="text-[13px]  mb-1">
          <span className="font-semibold">Tech-stack:</span> {tech}
        </p>
        <p className="text-[11px] text-pretty text-gray-500">{desc}</p>
        <div className="flex gap-5 mt-3 absolute bottom-4 left-5 ">
          <Link to={github} target="_blank">
            <button className="px-2 py-1 bg-gray-400 tracking-wide flex items-center gap-2 text-white rounded-lg border-2 border-dashed border-gray-700">
              Github
            </button>
          </Link>

          {visit && (
            <Link to={visit} target="_blank">
              <button className="px-2 py-1 bg-green-600 bg-opacity-50 flex tracking-wide items-center gap-2 text-white rounded-lg border-2 border-dashed border-green-700">
                Visit
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
