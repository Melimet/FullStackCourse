import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    /// ...
    return(
        <tbody>
        <tr>
        <td>{props.row}</td>
        <td>{props.value}</td>
        </tr>
        </tbody>
    )
};



//nappula
const Button = (props) => {
    return(
        <button onClick={props.handleClick}>
            {props.feedback}
        </button>
    )
};

const Statistics = (variable) => {


    if (variable.total === 0) {
        return (
            <div><p>ei annettua palautetta </p></div>
        );
    }

        return (
            <div>
                <h1> statistiikkaa </h1>
                <table>
                    <Statistic row="hyvä" value={variable.good}/>
                    <Statistic row="neutraali" value={variable.neutral}/>
                    <Statistic row="huono" value={variable.bad}/>
                    <Statistic row="keskiarvo" value={variable.avg}/>
                    <Statistic row="yhteensä" value={variable.total}/>
                    <Statistic row="positiivisia" value={variable.positivePct}/>


                </table>
            </div>
        )
};

const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <h1> Anna palautetta </h1>
            <Button handleClick={() => setGood(good+1)} feedback = "hyvä"/>(
            <Button handleClick={() => setBad(bad+1)} feedback = "huono"/>
            <Button handleClick={() => setNeutral(neutral+1)} feedback = "neutraali"/>
            <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {good + neutral + bad}
                avg = {(good - bad)/(good + neutral +bad) }
                positivePct = {good / (good + neutral + bad) *100 + " %"}
            />
        </div>
    )
};

    ReactDOM.render(<App />,
        document.getElementById('root')
    );