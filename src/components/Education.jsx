import EduCard from './EduCard'

export default function Education() {
  const data = [
    {
      year: '2017-18',
      course: 'Highschool Qualification',
      grade: '91%',
      desc: 'I completed secondary education from Jawahar highschool, Miraj.',
    },
    {
      year: '2019-20',
      course: '10+2 Qualification',
      grade: '80%',
      desc: 'I pursued my 10+2 qualification from Cambridge Highschool, Miraj.',
    },
    {
      year: '2021-24',
      course: 'Graduation',
      grade: '8.15 CGPA',
      desc: 'Currently, I am pursuing my B.TECH degree from RIT, Islampur.',
    },
  ]
  return (
    <div className="flex items-center mt-10 justify-center max-sm:flex-col max-sm:gap-8 gap-5">
      {data.map((item, index) => {
        return (
          <EduCard
            key={index}
            course={item.course}
            grade={item.grade}
            desc={item.desc}
            year={item.year}
          />
        )
      })}
    </div>
  )
}
