import PortCard from './PortCard'

export default function TeamProject() {
  const data = [
    {
      name: 'Code Crush',
      videoUrl: 'images/codecrush.png',
      type: 'individual',
      tech: 'ReactJS, SASS, omdbAPI',
      desc:
        'It is e-learning platform for begginers to practice programming languages and more.For more click visit   ',
      github: 'https://github.com/saad2786/codecrush1',
      visit: 'https://www.thecodecrush.com',
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
