export default function Container({ children }) {
  return (
    <div className='flex items-center flex-col w-[100vw] p-16   max-sm:p-8 gap-5 '>
      {children}
    </div>
  );
}
