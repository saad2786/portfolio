export default function Container({ children }) {
  return (
    <div className="flex items-center flex-col w-4/5 p-16 max-sm:p-8 gap-5 pr-32">
      {children}
    </div>
  )
}
