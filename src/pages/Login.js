import React, {useState} from "react"
import {Centered} from "../components/Centered"

export function Login() {
    const [email, setEmail] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(email)
    }

    return (
        <Centered>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">email</label>
                    <div className="control">
                        <input className="input" type="email"
                            onChange={onChangeEmail}
                            onFocus={() => {
                                console.log("Focus")
                            }}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">password</label>
                    <div className="control">
                        <input className="input" type="password"/>
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <input type="submit" className="button is-link" value="Enter"/>
                    </div>
                </div>
            </form>
        </Centered>
    )
}

// onChange, onFocus, onBlur