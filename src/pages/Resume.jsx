import Container from '../components/Container'
import Education from '../components/Education'
import Heading from '../components/Heading'

export default function Resume() {
  return (
    <Container>
      <Heading>Education</Heading>
      <div className='flex gap-6 max-sm:gap-2 items-start justify-evenly  flex-wrap  pt-4 
        overflow-y-scroll pb-20 h-[80vh] mx-auto w-full'>
        <Education />
      </div>
    </Container>
  )
}
