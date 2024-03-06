import 'react-circular-progressbar/dist/styles.css'
import SkillCard from './SkillCard'
const data = [
  {
    background: '#ff004d',
    icon:
      'https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png',
    name: 'ReactJS',
    desc: '10+ project created using Reactjs and have good grip in basics',
    percent: 60,
    active: true,
  },
  {
    background: '#5FBDFF',
    icon: 'https://www.svgrepo.com/show/333609/tailwind-css.svg',
    name: 'TailwindCSS',
    desc: 'This Portfolio is styled using TailwindCSS',
    percent: 50,
    active: true,
  },
  {
    background: '#019eff ',
    icon: 'https://cdn-icons-png.flaticon.com/512/82/82127.png',
    name: 'CSS3',
    desc:
      'Have intermidiat level understanding on CSS and projects in CSS also',
    percent: 78,
    active: false,
  },
  {
    background: '#FF90BC',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968550.png',
    name: 'SASS',
    desc:
      'I like to style using SASS and have multiple websites styled using SASS',
    percent: 80,
    active: false,
  },
  {
    background: 'orange',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-html5-457952.png',
    name: 'HTML5',
    desc: 'Have good grip in HTML5 and have projects build in HTML5',
    percent: 80,
    active: false,
  },
  {
    background: 'yellow',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968509.png',
    name: 'Javascript',
    desc: 'Have good understanding in JS and ES6 also ',
    percent: 75,
    active: true,
  },
]
export default function FrontSkill() {
  return (
    <>
      {data.map((skill, index) => {
        return (
          <SkillCard
            key={index}
            background={skill.background}
            icon={skill.icon}
            name={skill.name}
            desc={skill.desc}
            
            active={skill.active}
          />
        )
      })}
    </>
  )
}
