import Container from '../components/Container'
import Heading from '../components/Heading'
import { Outlet } from 'react-router'
import ContentNav from '../components/PortNav'
export default function Portfolio() {
  return (
    <Container>
      <Heading>Portfolio</Heading>
      <div className="h-[80vh] mx-auto w-full  ">
        <ContentNav />
        <div className='flex sm:gap-6  items-start justify-evenly  flex-wrap  w-[80vw]  h-[84%] pt-10  
        overflow-y-scroll '>
          <Outlet />
        </div>
      </div>
    </Container>
  )
}
