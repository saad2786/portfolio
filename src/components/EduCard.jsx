export default function EduCard({ year, course, grade, desc }) {
  return (
    <div className="flex-1  ">
      <p className="px-1 font-jos w-fit h-fit text-white font-semibold bg-yellow-400">
        {year}
      </p>
      <h3 className="font-semibold text-lg py-1">{course}</h3>
      <p className="w-full font-semibold font-jos">{grade}</p>

      <p className="font-light text-balance text-sm pr-9">{desc}</p>
    </div>
  )
}
