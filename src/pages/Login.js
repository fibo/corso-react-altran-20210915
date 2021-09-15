import React, {useState} from "react"
import {Centered} from "../components/Centered"

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitIsDisabled, setSubmitIsDisabled] = useState(true)

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (submitIsDisabled) return 
        console.log(email, password)
    }

    const onChangeCheckBox = (event) => {
        setSubmitIsDisabled(!event.target.checked)
        console.log(event.target.checked)
    }

    return (
        <Centered>
            <form onSubmit={onSubmit}>
                <div className="field">
                    <label className="label">email</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="email"
                            onChange={onChangeEmail}
                         />
                    </div>
                </div>
                <div className="field">
                    <label className="label">password</label>
                    <div className="control">
                        <input 
                        className="input" 
                        type="password"
                        onChange={onChangePassword}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                        <input type="checkbox" onChange={onChangeCheckBox}/>
                        &nbsp;I agree to the <a href="#">terms and conditions</a>
                        </label>
                    </div>
                </div>


                <div className="field is-grouped">
                    <div className="control">
                        <input type="submit" className="button is-link" disabled={submitIsDisabled} value="Enter"/>
                    </div>
                </div>
                
            </form>
        </Centered>
    )
}

// onChange, onFocus, onBlur