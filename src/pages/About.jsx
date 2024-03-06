import Heading from '../components/Heading'
import PropTypes from 'prop-types'
import Container from '../components/Container'
export default function About() {
  return (
    <>
      <Container>
        <Heading>About Me</Heading>
        <div className="capitalize h-1/5 py-5 pl-24 max-sm:pl-2 font-ubuntu  ">
          <h2 className="text-3xl max-sm:text-xl font-light mb-4 ">
            I&apos;m <span className="font-bold ">Saad Patil,</span> Web
            Developer / Programmer
          </h2>
          <p className="sm:text-base text-[12px]  text-wrap">
            Enthusiastic final year B.Tech Computer Science student. Proficient
            in MongoDB, Node.js, Express.js, JavaScript, SQL, React, and Redux.
            Proven track record of successfully completing multiple projects,
            demonstrating strong problem-solving skills and a passion for
            creating innovative solutions. Eager to apply my technical expertise
            and contribute to dynamic teams in the field of web development.
          </p>
        </div>
        <div className="uppercase  h-3/5 flex">
          <div className=" mx-auto py-6 w-[80vw] sm:w-3/6 h-60 sm:h-80 sm:mt-10 mt-32 bg-black text-white flex swing-in-top-fwd">

            <div className="border-r-2 border-gray-600 flex-1 flex flex-col sm:px-8 px-2   ">
              <div
                className="flex-1  flex
               flex-col items-center justify-center border-b-2 border-gray-600"
              >
                <h1 className="font-extrabold text-3xl text-[#e3bc6f] hover:text-yellow-400">
                  15+
                </h1>
                <p className="text-xs mt-2 font-medium">Project Done</p>
              </div>
              <div
                className="flex-1   flex

               flex-col items-center justify-center"
              >
                <h1 className="font-extrabold text-3xl text-[#e3bc6f] hover:text-yellow-400">
                  1
                </h1>
                <p className="text-xs mt-2  font-medium">Team Project</p>
              </div>
            </div>
            <div className="flex flex-col flex-1 h-full sm:px-8 px-2  ">
              <div
                className="flex-1 *:w-fit flex
               flex-col items-center justify-center border-b-2 border-gray-600"
              >
                <h1 className="font-extrabold text-3xl text-[#e3bc6f] hover:text-yellow-400">
                  500+
                </h1>
                <p className="text-xs mt-2 font-medium">Connections</p>
              </div>
              <div
                className="flex-1 *:w-fit flex
               flex-col items-center justify-center "
              >
                <h1 className="font-extrabold text-3xl text-[#e3bc6f] hover:text-yellow-400">
                  150+
                </h1>
                <p className="text-xs mt-2 font-medium">
                  Problem <span className="max-sm:hidden">Solved</span>
                </p>
              </div>
            </div>
          </div>
          <div className="pl-8 pt-2 w-[33%] max-sm:w-[80%]  font-jos max-sm:mt-32 text-center max-sm:hidden  ">
            <h1 className="text-xl font-extrabold mb-2  ">What I Do!</h1>
            <div
              className="flex items-center h-
          justify-between flex-col "
            >
              <div className="flex max-sm:w-[65vw]  ">
                {/* <DeveloperBoardIcon style={{ fontSize: '6rem' }} /> */}
                <div className=" pl-3 mb-8 ">
                  <h3 className="text-[14px] font-bold">Fronted Development</h3>
                  <p className="sm:text-base text-[12px] leading-6 font-light normal-case">
                    As a devoted front-end web developer, I specialize in
                    crafting visually appealing and user-friendly websites. My
                    focus is on building responsive interfaces that enhance the
                    overall user experience. Explore my portfolio for more.
                  </p>
                </div>
              </div>
              <div className="flex max-sm:w-[65vw] ">
                {/* <StorageIcon style={{ fontSize: '6rem' }} /> */}
                <div className=" pl-3">
                  <h3 className="text-[14px] font-bold">Backend Development</h3>
                  <p className="sm:text-base text-[12px] leading-6  font-light normal-case">
                    As an accomplished fullstack developer, I focus on designing
                    and implementing robust server-side solutions.I collaborate
                    effectively with cross-functional teams to build the
                    backbone of web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
Heading.propTypes = {
  children: PropTypes.node,
}
Container.propTypes = {
  children: PropTypes.node,
}
