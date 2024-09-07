import './App.css'
import {useState} from 'react'
function App() {
    let [counter,setCounter] =useState(0)

    //let counter = 5;
    const addValue = () => {
        setCounter(counter + 1);
        console.log('added'+counter);
    }
    const removeValue = () => {
        counter >0? setCounter(counter - 1):setCounter(counter);
        console.log('removed'+counter);
    }
    return(
        <>
            <h1>Hello</h1>
            <h2>counter value {counter}</h2>
            <button onClick={addValue}>Add {counter}</button>
            <button onClick={removeValue}>Remove {counter}</button>
            <p>footer :{counter}</p>
        </>
    )

}

export default App
