import LinearProgress from '@mui/joy/LinearProgress'
export default function SkillCard({
  background,
  icon,
  name,
  desc,
  percent,
  active,
}) {
  return (
    <div className="rounded-xl relative py-4 max-sm:py-10 px-16 max-sm:px-10 max-sm:mb-12 border-gray-500 border-2 w-[40%] max-sm:w-[65vw] max-sm:h-[35%]  h-40 mb-8 border-dashed bg-gray-200 slide-in-blurred-top ">
      <div
        className={`rounded-full z-10 border-[5px] bg-re text-whitei  border-white w-20 h-20 p-4 text-sm  absolute -left-8 -top-8 `}
        style={{ backgroundColor: background }}
      >
        <img
          src={icon}
          alt=""
          className="h-full w-full object-cover text-white "
        />
      </div>
      {active && (
        <div className="absolute top-3 right-3 flex items-baseline gap-1 text-xs px-2 py-1 bg-green-500 bg-opacity-25 font-semibold text-green-800 rounded-lg ">
          <span className="relative flex h-3 w-3 ">
            <span className="animate-ping absolute right-0 inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          Active
        </div>
      )}
      <p className="text-black text-xl mx-auto  font-semibold mb-4  ">{name}</p>
      <p className="text-black text-sm mx-auto w-[120%] text-wrap  font-light">
        {desc}
      </p>

      <div className=" absolute bottom-4 left-0 right-0 px-12 ">
        <LinearProgress
          determinate
          sx={{ color: '#FF004D', backgroundColor: '#B6BBC4' }}
          value={percent}
        />
      </div>
    </div>
  )
}
