import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import AllProjects from './components/AllProjects'
import Backend from './components/Backend'
import Frontend from './components/Frontend'
import TeamProject from './components/TeamProject'
import About from './pages/About'
import AppLayout from './pages/AppLayout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PropTypes from 'prop-types'
import Resume from './pages/Resume'
import Skill from './pages/Skill'
import FrontSkill from './components/FrontSkill'
import BackSkill from './components/BackSkill'
import Database from './components/Database'
import ProgramSkill from './components/ProgramSkill'

// import About from './pages/About'

function App() {
  return (
    <div className="w-[100vw] h-[100vh] box-border  ">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<AppLayout />}>
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />}>
              <Route index element={<Navigate replace to="all" />} />
              <Route path="all" index element={<AllProjects />} />
              <Route path="frontend" element={<Frontend />} />
              <Route path="backend" element={<Backend />} />
              <Route path="team" element={<TeamProject />} />
            </Route>
            <Route path="skill" element={<Skill />}>
              <Route index element={<Navigate replace to="frontend" />} />
              <Route path="frontend" element={<FrontSkill />} />
              <Route path="backend" element={<BackSkill />} />
              <Route path="database" element={<Database />} />
              <Route path="programming" element={<ProgramSkill />} />
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
App.PropTypes = {
  children: PropTypes.node,
}
