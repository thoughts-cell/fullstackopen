import ReactDOM from 'react-dom/client'

import App from './App'

 

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, excercise }) => (
  <p>
    {part} {excercise}
  </p>
)

const Content = () => (
  <div>
    <Part part={part1} excercise={excercise1} />
    <Part part={part2} excercise={excercise2} />
    <Part part={part3} excercise={excercise3} />
  </div>
)

const App = () => (
  <div>
    <Header course={course} />
    <Content />
    <p>Number of excercise {excercise1 + excercise2 + excercise3}</p>
  </div>
) 
const course = 'Half Stack application development'
  parts : [
    { name: 'Fundamentals of React',
      exercises: 10 },
    { name: 'Using props to pass data',
      exercises: 7 },
    { name: 'State of a component',
      exercises: 14 }
  ]
return (
  <div>
    <Header course={course} />
    <Content  partts = {parts } />
    <Total parts={parts} />

    </div>
)
export default App
