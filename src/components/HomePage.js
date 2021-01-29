import React from 'react'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory();

    const routeToPizzaForm= () => {
        console.log(history, "history")
        history.push('/pizza')
    }
    
    return (
        <div>
            <h1>Your favorite food, delivered while coding!</h1>
            <button onClick={routeToPizzaForm}> Pizza? </button>
        </div>
    )
}
