import Container from '../components/Container'
import Heading from '../components/Heading'
import { Outlet } from 'react-router'
import ContentNav from '../components/PortNav'
export default function Portfolio() {
  return (
    <Container>
      <Heading>Portfolio</Heading>
      <div className="px-8 h-4/5 w-full max-sm:w-[90vw]">
        <ContentNav />
        <div className="flex w-full  gap-8 items-center justify-between flex-wrap h-[90%]  mt-8  p-4  overflow-scroll slide-in-bottom ">
          <Outlet />
        </div>
      </div>
    </Container>
  )
}
