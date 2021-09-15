import React, {useState,useEffect,useCallback} from "react"
import {Centered} from "../components/Centered"
import {Terms} from "../components/Terms";

function isMobile(width){
    return width < 768;
}

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitIsDisabled, setSubmitIsDisabled] = useState(true)
    const [termsChecked,setTermsChecked] = useState(false)
    const [dark,setDark] =  useState(false);

    useEffect(() => {
        const enabled= (termsChecked && password.length > 6 && email)
        setSubmitIsDisabled(!enabled)
        console.log(email,password)
    },[email,password,termsChecked])


    const handleResize = useCallback(()=>{
        console.log("resize");
        const width = window.innerWidth;
        setDark(isMobile(width));
    },[])

    useEffect(() => {

        window.addEventListener('resize',handleResize);
        return () => {
            window.removeEventListener('resize',handleResize);
        }
    },[])



    /*const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }*/

    const onChangeEmail = useCallback((event) => {
        setEmail(event.target.value)
    },[])


    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value)
    },[])

    const onSubmit = useCallback((event) => {
        event.preventDefault()
        if (submitIsDisabled) return 
        console.log(email, password)
    },[submitIsDisabled,email,password])

    const onChangeCheckBox = useCallback((event) => {
        setTermsChecked(event.target.checked)
    },[])

    return (
        <Centered dark={dark}>
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
                        minLength={6}
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                        <input
                            type="checkbox"
                            onChange={onChangeCheckBox}
                            checked={termsChecked}/>
                          &nbsp;I agree to the <a href="https://www.google.it" >terms and conditions</a>
                        </label>
                    </div>
                </div>


                <div className="field is-grouped">
                    <div className="control">
                        <input type="submit" className="button is-link" disabled={submitIsDisabled} value="Enter"/>
                    </div>
                </div>
                
            </form>
            {termsChecked?null: <Terms />}
        </Centered>
    )
}

// onChange, onFocus, onBlur