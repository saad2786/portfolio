export default function Heading({ children }) {
  return (
    <div className=" flex uppercase w-4/5 max-sm:w-[80vw] max-sm:h-24 max-sm:mx-auto h-1/5 border-dotted border-[3px] border-gray-500 text-8xl max-sm:text-3xl font-bold text-gray-800 tracking-in-expand items-center justify-center ">
      {children}
    </div>
  )
}
