import React, { useState } from "react";
const UserInput = () => {

    const Initial = {
        currentSaving: 0,
        yearlySaving: 0,
        expectedInterest: 0,
        duration: 0
    }

    const [userInput, setUserInput] = useState(Initial)

    const handleChanges = (event) => {
        setUserInput((pervious) => {
            return {
                ...pervious,
                [event.target.id]: event.target.value
            }
        })

    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput)

    }

    const resetHandler = () => {
        console.log("reset!")
        setUserInput(Initial)
    }

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="currentSaving" onChange={handleChanges} value={userInput.currentSaving} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearlySaving" onChange={handleChanges} value={userInput.yearlySaving} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expectedInterest" onChange={handleChanges} value={userInput.expectedInterest} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={handleChanges} value={userInput.duration} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button" onClick={submitHandler} >
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default UserInput;