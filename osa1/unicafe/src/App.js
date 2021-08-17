import React, { useState } from 'react'


const StatisticLine = ({ text, value, text2 }) => (
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
          <td>{text2}</td>
        </tr>
      </tbody>
    )

const Statistics = (props) => {

  if (props.allClicks === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }

 else return (
   <table>
        <StatisticLine text ="good" value ={props.good} />
        <StatisticLine text ="neutral" value ={props.neutral} />
        <StatisticLine text ="bad" value ={props.bad} />
        <StatisticLine text ="all" value ={props.allClicks} />
        <StatisticLine text ="average" value ={props.average / props.allClicks} />
        <StatisticLine text ="positive" value ={props.positive / props.allClicks} text2 ="%" />
</table>
  )
} 


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setAverage(average + 1)
    setPositive(positive + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setAverage(average + 0)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks + 1)
    setAverage(average - 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad}
        allClicks={allClicks} average={average} positive={positive}/>
      </div>
    </div>
  )
}

export default App