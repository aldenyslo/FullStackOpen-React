import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.title}</h1>
}

const Button = (props) => {
  return <button onClick={props.handleClick} >{props.text}</button>
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.sign}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;

  if (good + neutral + bad === 0) {
    return <p>No feedback given</p>
  }
  
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + bad + neutral} />
        <StatisticLine text="average" value={(good - bad)/(good + neutral + bad)} />
        <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100} sign="%" />
      </tbody>
    </table>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title="give feedback" />
      <Button  handleClick={() => setGood(good + 1)} text="good" />
      <Button  handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button  handleClick={() => setBad(bad + 1)} text="bad" />

      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
