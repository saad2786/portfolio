import Container from '../components/Container'
import Education from '../components/Education'
import Heading from '../components/Heading'

export default function Resume() {
  return (
    <Container>
      <Heading>Resume</Heading>
      <div className="mb-8 slide-in-bottom h-[90%]  items-center justify-center">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <Education />
      </div>
    </Container>
  )
}
