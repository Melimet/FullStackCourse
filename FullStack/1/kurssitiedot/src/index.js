import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <h1>
            {props.course}
        </h1>
    )
}
const Content = (props) => {

    let all="";

    props.parts.forEach(obj =>{
        all+= obj.name +" " + obj.exercises + "\n";
    })

    return(
        <div>
            {all}
        </div>

    )
}
const Total = (props) => {

    let total = 0

    props.parts.forEach(value => {
        total+=value.exercises
    })

    return(
        <p>
            yhteensä {total} tehtävää
        </p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course = {course.name}/>
            <Content parts = {course.parts}/>
            <Total parts = {course.parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))