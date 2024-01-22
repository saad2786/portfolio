import SkillCard from './SkillCard'

export default function ProgramSkill() {
  const data = [
    {
      background: '#525CEB',
      icon: 'https://friconix.com/png/fi-hnsuxx-cpp.png',
      name: 'C++',
      desc: 'Solved 100+ problem in C++ on different coding platforms',
      percent: 65,
    },
    {
      background: '#D80032',
      icon: 'https://cdn-icons-png.flaticon.com/512/152/152760.png',
      name: 'Java',
      desc: 'Have good grip in Java in programming  ',
      percent: 60,
    },
    {
      background: 'orange',
      icon: 'https://static.thenounproject.com/png/2007252-200.png',
      name: 'OOPs',
      desc: 'Good understanding of Object Oriented Programming  ',
      percent: 80,
    },
    {
      background: '#AAD7D9',
      icon: 'https://cdn-icons-png.flaticon.com/512/8637/8637707.png',
      name: 'DSA',
      desc:
        'Practiced problems of DSA like searching, sorting, linked list, arrray, string ',
      percent: 60,
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
          />
        )
      })}
    </>
  )
}
