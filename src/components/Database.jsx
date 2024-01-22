import SkillCard from './SkillCard'

export default function Database() {
  const data = [
    {
      background: '#54B435 ',
      icon: 'https://www.svgrepo.com/show/331488/mongodb.svg',
      name: 'MongoDB',
      desc: 'Built 4 projects using mongoDB database',
      percent: 78,
      active: true,
    },
    {
      background: '#2192FF',
      icon:
        'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/database-512.png',
      name: 'SQL',
      desc: 'Have an Ecommerce project based on MySQL database',
      percent: 65,
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
