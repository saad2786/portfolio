import PortCard from './PortCard'

export default function Frontend() {
  const data = [
    {
      name: 'Code Crush',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, omdbAPI',
      desc:
        'It is e-learning platform for begginers to practice programming languages and more.For more click visit   ',
      github: 'https://github.com/saad2786/codecrush1',
      visit: 'https://www.thecodecrush.com',
    },
    {
      name: 'Dashboard',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, Chart.js',
      desc:
        'Beautiful UI of dashboard and functionalities given using Reactjs.',
      github: 'https://github.com/saad2786/dashboard',
      visit: 'https://dashbaord-react.netlify.app/',
    },
    {
      name: 'Perfomance Page',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, Chart.js',
      desc:
        'Beautiful UI of dashboard and functionalities given using Reactjs.',
      github: 'https://github.com/saad2786',
      visit: 'https://mockups-1.netlify.app',
    },
    {
      name: 'Packaging List Web App',
      videoUrl: '',
      type: 'individual',
      tech: 'ReactJS, SASS, omdbAPI',
      desc:
        'It is app in which we can make list of things to pack while traveling',
      github: 'https://github.com/saad2786/packing_list',
      visit: 'https://makepackinglist.netlify.app/',
    },
    {
      name: 'Weather App',
      videoUrl: '',
      type: 'individual',
      tech: 'EJS, CSS, Javascript',
      desc: 'App to search weather of any place by location name',
      github: 'https://github.com/saad2786/weather',
      visit: '',
    },
    {
      name: 'Simon Game',
      videoUrl: '',
      type: 'individual',
      tech: 'HTML, CSS, Javascript',
      desc: 'It is Simon game app.',
      github: 'https://github.com/saad2786/Boss_level_challenge_2',
      visit: 'https://saad2786.github.io/Boss_level_challenge_2/',
    },
    {
      name: 'Dice Game',
      videoUrl: '',
      type: 'individual',
      tech: 'HTML, CSS, Javascript',
      desc: 'It is a two player dice game',
      github: 'https://github.com/saad2786/Dice-Game',
      visit: 'https://md-saad-23.netlify.app',
    },
  ]
  return (
    <>
      {data.map((item, key) => {
        return (
          <PortCard
            name={item.name}
            videoUrl={item.videoUrl}
            type={item.type}
            github={item.github}
            tech={item.tech}
            visit={item.visit}
            desc={item.desc}
            key={key}
          />
        )
      })}
    </>
  )
}
