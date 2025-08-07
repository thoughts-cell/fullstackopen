import { useState } from 'react'



const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad  
  if (total === 0) {
    return <p>No feedback given</p>
  }
  let average = (good - bad) / total
  let positive = (good / total) * 100
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
          </tbody>
          </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  ) 
}

const App = () => {
  const  [good, setGood] = useState(0)
  const  [neutral, setNeutral] = useState(0)
  const  [bad, setBad] = useState(0)

  return (
    <div>
      <p>Give feedback</p>
      <button onClick={ ()  => setGood(good + 1)}>good</button>
      <button onClick={ ()  => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={ ()  => setBad(bad + 1)}>bad </button>
      <h1>Statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>All {good + neutral + bad}</p>
      <p>Average { (good - bad) / (good + neutral + bad)
      }</p>
      <p>Positive {good / (good + neutral + bad) * 100} %</p>
       </div>  

  )
}
export default App
