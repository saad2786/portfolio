import SkillCard from './SkillCard'

export default function BackSkill() {
  const data = [
    {
      background: '#65B741',
      icon:
        'https://cdn.iconscout.com/icon/free/png-256/free-node-js-3627181-3029589.png',
      name: 'Node.JS',
      desc: 'Created REST APIs for Fullstack Projects using Node.JS',
      percent: 40,
      active: true,
    },
    {
      background: '#f3f3f3',
      icon:
        'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png',
      name: 'Express.js',
      desc: 'Most of the project`s backend created using Express.js',
      percent: 50,
      active: true,
    },
  ]
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
            percent={skill.percent}
            active={skill.active}
          />
        )
      })}
    </>
  )
}
