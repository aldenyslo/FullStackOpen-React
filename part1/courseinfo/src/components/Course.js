const Header = ({text}) => <h2>{text}</h2>

const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({parts}) => {
  const total = parts.reduce((sum, cur) => sum + cur.exercises, 0)

  return (
    <div>
    {parts.map(part => <Part key={part.id} part={part} />)}
    <strong>total of {total} exercises</strong>
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course