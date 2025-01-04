import React, { useState } from 'react'
import { data } from './data'
import './quizstyle.css'

const Quizapp  = () => {
    const [index, setIndex] = useState(0);
    const [option, setOption] = useState('');
    const [finished, setFinish] = useState(false);
    const [score, setScore] = useState(0);
    const correctAnswers = ['Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1', 'Option1'];
    const handleClick = () => {
        if(index < data.length - 1){
            if (option === correctAnswers[index]){
                setScore(score + 1);
            }
            setIndex(index + 1);
            setOption('');
        } else {
            setFinish(true);
        }
    }
    if(finished){
        return (
            <div className = 'scorePage'>
        <h1> Quiz Completed </h1>
        <h3>Your Score is {score} out of {data.length} </h3>
        </div>
)
    }
    const handleSelect = (opt) => {
        setOption(opt);
    }
  return (
    <div className = 'quiz'>
         <h1>{data[index].id}. {data[index].Question}</h1>
        <ul>
            <li className={option === "Option1" ? "selected" : ""} onClick={() => handleSelect("Option1")}>{data[index].Option1}</li>
            <li className={option === "Option2" ? "selected" : ""} onClick={() => handleSelect("Option2")}>{data[index].Option2}</li>   
            <li className={option === "Option3" ? "selected" : ""} onClick={() => handleSelect("Option3")}>{data[index].Option3}</li>
            <li className={option === "Option4" ? "selected" : ""} onClick={() => handleSelect("Option4")}>{data[index].Option4}</li>
        </ul>
        <button onClick={handleClick} disabled = {!option}>Next</button>
        <h5> Question {index+1} of {data.length}</h5>

    </div>
  )
}

export default Quizapp;
// Assuming you want to display the question numbers in the output, you can modify the question display part.
