import React from 'react'

const Header = (props) => {
    return <h1>{props.name}</h1>
  }

const Part = (props) => {
    return (
        <p>{props.name}: {props.exercises}</p> 
    )
  }

  const Total = (props) => {
    const total = props.parts.reduce( (previousValue, CurrentValue) => {
        return previousValue + CurrentValue.exercises 
      }, 0)

    return (
        <b> Total of {total} exercises
        </b>
    )
  }

  const Content = (props) => {
      var content = props.parts.map(function(part){
          return <Part key={part.id} name={part.name} exercises={part.exercises}/>
      })

     const noContent = !Array.isArray(content) ||!content.length

      return (
          <div>
              {noContent && <p>Course has no content</p>}
              {!noContent && content}
          </div>
      ) 
  }

const Course = ({course}) => {
    

  /*  var exercises0 = course[0].parts.map(function(part) {
      return part.exercises 
    })
   
    console.log(exercises0)
  
   var content0 = course[0].parts.map(function(part){
      return part.name + ": " + part.exercises
    }) 

  
    console.log(content0)
   
    const total0 = exercises0.reduce( (previousValue, CurrentValue) => {
      return previousValue + CurrentValue 
    }, 0)
  
    console.log(total0)
  
    var exercises1 = course[1].parts.map(function(part) {
      return part.exercises 
    })
   
    console.log(exercises1)
  
    var content1 = course[1].parts.map(function(part){
      return part.name + ": " + part.exercises
    })
  
    console.log(content1)
   
    const total1 = exercises1.reduce( (previousValue, CurrentValue) => {
      return previousValue + CurrentValue 
    }, 0)
  
    console.log(total1)  */
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} /> 
        <Total parts={course.parts} />
      </div> 
    )
  }

export default Course